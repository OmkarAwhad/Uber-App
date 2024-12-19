const { validationResult } = require("express-validator");
const Ride = require("../models/ride.models");
const { createRide } = require("../services/ride.service");

module.exports.createRideController = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log("Error : ", errors.array());
			return res.status(400).json({ errors: errors.array() });
		}

		const { pickup, destination, vehicleType } = req.body;

		try {
			const response = await createRide({
				user: req.user.id,
				pickup: pickup,
				destination: destination,
				vehicleType: vehicleType,
			});
         console.log("Ride created : ", response)
			return res.status(201).json({
				response: response,
				msg: "Ride created successfully",
			});
		} catch (error) {
			console.log("Error in creating ride  : ", error);
			return res.status(500).json({ error: "Error in creating ride" });
		}
	} catch (error) {
		console.log("Error in createRideController : ", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};
