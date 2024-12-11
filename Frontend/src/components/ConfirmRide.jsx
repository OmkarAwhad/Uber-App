/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import CarImage from "../assets/CarImage.jpg";

const ConfirmRide = ({ setConfirmRidePanel, setVehicleFound, createRide }) => {
	return (
		<div className="flex gap-1 justify-between flex-col items-center">
			<img className="h-20" src={CarImage} alt="" />
			<div className="w-full mt-5">
				<div className="flex items-center gap-5 p-3 border-b-2">
					<RiMapPinUserFill />
					<div>
						<h3 className="text-lg font-medium">562/11-A</h3>
						<p className="text-sm -mt-1 text-gray-600">
							PickUp
						</p>
					</div>
				</div>
				<div className="flex items-center gap-5 p-3 border-b-2">
					<MdLocationPin />
					<div>
						<h3 className="text-lg font-medium">562/11-A</h3>
						<p className="text-sm -mt-1 text-gray-600">
							destination
						</p>
					</div>
				</div>
				<div className="flex items-center gap-5 p-3">
					<IoCashOutline />
					<div>
						<h3 className="text-lg font-medium">
							₹Fare and type
						</h3>
						<p className="text-sm -mt-1 text-gray-600">
							Cash Cash
						</p>
					</div>
				</div>
			</div>
			<button
				onClick={() => {
					setVehicleFound(true);
					setConfirmRidePanel(false);
				}}
				className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
			>
				Confirm
			</button>
		</div>
	);
};

export default ConfirmRide;
