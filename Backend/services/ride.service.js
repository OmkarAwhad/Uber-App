const Ride = require("../models/ride.models");
const { getDistanceTime } = require("./maps.service");
const crypto = require("crypto");

const getFare = async (pickup, destination) => {
	if (!pickup || !destination) {
		throw new Error("Pickup and destination are required");
	}

	const distanceTime = await getDistanceTime(pickup, destination);

	const baseFare = {
		auto: 30,
		car: 50,
		motorcycle: 20,
	};

	const perKmRate = {
		auto: 10,
		car: 15,
		motorcycle: 8,
	};

	const perMinuteRate = {
		auto: 2,
		car: 3,
		motorcycle: 1.5,
	};

	const fare = {
		auto: Math.round(
			baseFare.auto +
			(distanceTime.distance.value / 1000) * perKmRate.auto +
			(distanceTime.duration.value / 60) * perMinuteRate.auto
		),
		car: Math.round(
			baseFare.car +
			(distanceTime.distance.value / 1000) * perKmRate.car +
			(distanceTime.duration.value / 60) * perMinuteRate.car
		),
		motorcycle: Math.round(
			baseFare.motorcycle +
			(distanceTime.distance.value / 1000) *
			perKmRate.motorcycle +
			(distanceTime.duration.value / 60) *
			perMinuteRate.motorcycle
		),
	};

	return fare;
};

const getOtp = (num) => {
	const generateOtp = (num) => {
		const otp = crypto.randomInt(
			Math.pow(10, num - 1),
			Math.pow(10, num)
		).toString();
		console.log("OTP: " + otp);
		return otp;
	};
	return generateOtp(num);
};

module.exports.createRide = async ({
	user,
	pickup,
	destination,
	vehicleType,
}) => {
	try {
		if (!user || !pickup || !destination || !vehicleType) {
			throw new Error("All fields are required");
		}

		const fare = await getFare(pickup, destination); // object return hoga jisme tino (car,auto,motorcycle) ke values rahenge

		const rideResponse = await Ride.create({
			user,
			pickup,
			destination,
			otp: getOtp(6),
			fare: fare[vehicleType],
		});

		return rideResponse;
	} catch (error) {
		console.log(error);
		throw new Error("Error in creating ride service");
	}
};
