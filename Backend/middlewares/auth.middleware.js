const express = require("express");
require("dotenv").config();
const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const BlacklistToken = require("../models/blacklistToken.models");
const Captain = require("../models/captain.models");

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
	try {
		// Retrieve token from cookies or Authorization header
		const token =
			req.cookies.token || req.headers.authorization?.split(" ")[1];
		console.log("Authorization Header:", req.headers.authorization);
		console.log("Token from cookies:", req.cookies.token);
		console.log("Extracted Token:", token);

		// Check if token is missing
		if (!token) {
			return res
				.status(401)
				.json({ message: "Unauthorized: Token not found" });
		}

		// Check if token is blacklisted
		const isBlacklisted = await BlacklistToken.findOne({ token });
		if (isBlacklisted) {
			return res
				.status(401)
				.json({ message: "Unauthorized: Token is blacklisted" });
		}

		// Verify the token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		console.log("Decoded Token:", decoded);

		// Retrieve captain details
		const captain = await Captain.findById(decoded._id);
		if (!captain) {
			return res
				.status(401)
				.json({ message: "Unauthorized: Captain not found" });
		}
		req.captain = captain;

		return next();
	} catch (err) {
		console.error("JWT Verification Error:", err);
		return res
			.status(401)
			.json({ message: "Invalid or malformed token" });
	}
};
