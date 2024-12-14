const {
	getAddressCoordinate,
	getDistanceTime,
	getAutoCompleteSuggestions,
} = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log("Error:", errors);
			return res.status(400).json({
				errors: errors.array(),
			});
		}

		const { address } = req.query;

		try {
			const coordinates = await getAddressCoordinate(address);
			res.status(201).json(coordinates);
		} catch (error) {
			console.log(
				"Error in mapservice getAddressCoordinates: ",
				error
			);
			res.status(500).json({ msg: "Coordinates not found" });
		}
	} catch (error) {
		console.log("Error in getCoordinates: ", error);
		res.status(500).json({ msg: "Error in getCoordinates" });
	}
};

module.exports.getDistanceTime = async (req, res) => {
	try {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			console.log("Error:", error);
			return res.status(400).json({ errors: error.array() });
		}

		const { origin, destination } = req.query;

		try {
			const coordinates = await getDistanceTime(origin, destination);
			res.status(201).json(coordinates);
		} catch (error) {
			console.log("Coordinates not found , error : ", error);
			res.status(500).json({ msg: "Coordinates not found" });
		}
	} catch (error) {
		console.log("Error in getDistanceTime: ", error);
		res.status(500).json({ msg: "Error in getDistanceTime" });
	}
};

module.exports.getSuggestions = async (req, res) => {
	try {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			console.log("Error:", error);
			return res.status(400).json({ errors: error.array() });
		}

		const { input } = req.query;

		try {
			const coordinates = await getAutoCompleteSuggestions({
				input: input,
			});
			res.status(201).json(coordinates);
		} catch (error) {
			console.log("Coordinates not found , error : ", error);
			res.status(500).json({ msg: "Coordinates not found" });
		}
	} catch (error) {
		console.log("Error in getSuggestions: ", error);
		res.status(500).json({ msg: "Error in getSuggestions" });
	}
};
