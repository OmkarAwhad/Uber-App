const express = require("express");
const router = express.Router();
const { authUser } = require("../middlewares/auth.middleware");
const {
	getCoordinates,
	getDistanceTime,
	getSuggestions,
} = require("../controller/maps.controller");
const { query } = require("express-validator");

router.get(
	"/get-coordinates",
	[
		query("address")
			.isString()
			.isLength({ min: 3 })
			.withMessage("Address is required."),
	],
	authUser,
	getCoordinates
);

router.get(
	"/get-distance-time",
	[
		query("origin")
			.isString()
			.isLength({ min: 3 })
			.withMessage("Origin is required."),
		query("destination")
			.isString()
			.isLength({ min: 3 })
			.withMessage("Destination is required."),
	],
	authUser,
	getDistanceTime
);

router.get(
	"/get-suggestions",
	[
		query("input")
			.isString()
			.isLength({ min: 3 })
			.withMessage("input is required."),
	],
	authUser,
	getSuggestions
);

module.exports = router;
