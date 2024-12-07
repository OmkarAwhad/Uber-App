const User = require("../models/user.models");

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
	try {
		if (!firstname || !email || !password) {
			console.log("All fields are required");
			throw new Error("All fields are required");
		}
		const response = await User.create({
			fullname: {
				firstname,
				lastname,
			},
			email: email,
			password: password,
		});
		return response;
	} catch (error) {
		return res.json({
			success: false,
			message: "Error in creating user",
		});
	}
};
