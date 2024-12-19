const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { createRideController } = require("../controller/ride.controller");
const { authUser } = require("../middlewares/auth.middleware");

router.post(
	"/create",
	[
		body("pickup")
			.isString()
			.isLength({ min: 3 })
			.withMessage("Invalid pickup id"),
		body("destination")
			.isString()
			.isLength({ min: 3 })
			.withMessage("Invalid destination id"),
		body("vehicleType")
			.isString()
			.isIn(["auto", "car", "motorcycle"])
			.withMessage("Invalid vehicle type "),
	],
	authUser,
	createRideController
);

module.exports = router;
