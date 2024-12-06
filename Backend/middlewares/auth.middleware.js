const express = require("express");
require("dotenv").config();
const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const BlacklistToken = require("../models/blacklistToken.models");
const Captain = require("../models/captain.models")

module.exports.authUser = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		const token = authHeader
			? authHeader.split(" ")[1]
			: req.cookies.token;
		console.log("Token: " + token);
		if (!token) {
			return res.status(401).json({ msg: "Token not found" });
		}

		const isBlacklisted = await BlacklistToken.findOne({ token: token });
		if (isBlacklisted) {
			return res.status(401).json({ msg: "Unauthorized" });
		}

		try {
			const decode = jwt.verify(token, process.env.JWT_SECRET);
			console.log("Decode:", JSON.stringify(decode, null, 2));
			console.log("id : ", decode._id);
			let user = await User.findById({ _id: decode._id });
			if (!user) {
				return res.status(401).json({ msg: "User not found" });
			}
			// user = user.toObject();
			console.log("1", user);

			req.user = user;
			console.log("1");

			return next();
		} catch (error) {
			return res.status(401).json({ msg: "Token is not valid" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ msg: "Server error" });
	}
};

module.exports.authCaptain = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	const token = authHeader ? authHeader.split(" ")[1] : req.cookies.token;
	console.log("Token: " + token);
	if (!token) {
		return res.status(401).json({ message: "Unauthorized 1" });
	}

	const isBlacklisted = await BlacklistToken.findOne({ token: token });
	if (isBlacklisted) {
		return res.status(401).json({ message: "Unauthorized 2" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const captain = await Captain.findById(decoded._id);
		req.captain = captain;

		return next();
	} catch (err) {
		console.log(err);

		res.status(401).json({ message: "Unauthorized 3" });
	}
};
