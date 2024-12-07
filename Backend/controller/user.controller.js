const User = require("../models/user.models");
const { createUser } = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array(), msg:"Error in validation Result" });
		}

		const { fullname, email, password } = req.body;

          const userExists = await User.findOne({email:email});
          if(userExists){
               return res.status(400).json({ msg:"User with this email already exists" });
          }

		const hashedPassword = await User.hashPassword(password);

		const response = await createUser({
			firstname : fullname.firstname,
			lastname : fullname.lastname,
			email,
			password: hashedPassword,
		});

          const token = response.generateAuthToken();

          res.status(201).json({ user: response, token });

	} catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error in registering user" });
     }
};
