const User = require("../models/user.models");
const BlacklistToken = require("../models/blacklistToken.models");
const { createUser } = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				msg: "Error in validation Result",
			});
		}

		const { fullname, email, password } = req.body;

		const userExists = await User.findOne({ email: email });
		if (userExists) {
			return res
				.status(400)
				.json({ msg: "User with this email already exists" });
		}

		const hashedPassword = await User.hashPassword(password);

		const response = await createUser({
			firstname: fullname.firstname,
			lastname: fullname.lastname,
			email,
			password: hashedPassword,
		});

		const token = response.generateAuthToken();

		res.status(201).json({ user: response, token });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Internal Server Error in registering user",
		});
	}
};

module.exports.loginUser = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		console.log("1");
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				msg: "Error in validationResult",
			});
		}
		console.log("2");

		const { email, password } = req.body;
		console.log("3");

		const userData = await User.findOne({ email: email }).select(
			'+password'
		);
		// console.log(userData)
		if (!userData) {
			return res.status(401).json({ msg: "User not found" });
		}
		console.log("4");

		const passwordMatch = await userData.comparePassword(password);
		if (!passwordMatch) {
			return res.status(400).json({ msg: "Invalid password" });
		}
		console.log("5");

		const token = userData.generateAuthToken();
		console.log("6");

		// logged in rakhta h user ko (baar baar token pass karne ki jarurat nahi)
		res.cookie('token', token);

		return res.status(200).json({
			userData,
			token,
			msg: "User logged in successfully",
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Internal Server Error in logging user in",
		});
	}
};

module.exports.getUserProfile = async(req,res,next)=>{
	try {
		console.log("User : ", req.user)
		return res.status(200).json(req.user)
	} catch (error) {
		console.log(error)
		res.status(500).json({error: "Internal Server Error in getting user profile"})
	}
}

module.exports.logoutUser = async(req,res,next)=>{
	try {
		const authHeader = req.headers.authorization;
		const token = authHeader
			? authHeader.split(" ")[1]
			: req.cookies.token;
          if(!token){
               return res.status(401).json({msg: "No token, user not logged in"})
          }

          const blacklistToken = await BlacklistToken.create({token})

          res.clearCookie('token')
          return res.status(200).json({msg: "User logged out successfully"})
	} catch (error) {
		console.log(error)
		res.status(500).json({error: "Internal Server Error in logging user out"})
	}
}
