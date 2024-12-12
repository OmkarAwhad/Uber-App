/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CarImage from "../assets/CarImage.jpg";
import { RiArrowDownWideLine } from "react-icons/ri";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";

const WaitingForDriver = ({ waitingForDriver }) => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<img className="h-12" src={CarImage} alt="" />
				<div className="text-right">
					<h2 className="text-lg font-medium capitalize">
						{/* {props.ride?.captain.fullname.firstname} */}pp
					</h2>
					<h4 className="text-xl font-semibold -mt-1 -mb-1">
						{/* {props.ride?.captain.vehicle.plate} */}mm
					</h4>
					<p className="text-sm text-gray-600">
						Maruti Suzuki Alto
					</p>
					<h1 className="text-lg font-semibold">
						{" "}
						{/* {props.ride?.otp}{" "} */}mm
					</h1>
				</div>
			</div>

			<div className="flex gap-2 justify-between flex-col items-center">
				<div className="w-full mt-5">
					<div className="flex items-center gap-5 p-3 border-b-2">
						<RiMapPinUserFill className="text-2xl font-semibold" />
						<div>
							<h3 className="text-lg font-medium">
								562/11-A
							</h3>
							<p className="text-sm -mt-1 text-gray-600">
								{/* {props.ride?.pickup} */}mm
							</p>
						</div>
					</div>
					<div className="flex items-center gap-5 p-3 border-b-2">
						<MdLocationPin className="text-2xl font-semibold" />
						<div>
							<h3 className="text-lg font-medium">
								562/11-A
							</h3>
							<p className="text-sm -mt-1 text-gray-600">
								{/* {props.ride?.destination} */}mm
							</p>
						</div>
					</div>
					<div className="flex items-center gap-5 p-3">
						<IoCashOutline className="text-2xl font-semibold" />
						<div>
							<h3 className="text-lg font-medium">
								{/* ₹{props.ride?.fare}{" "} */}mm
							</h3>
							<p className="text-sm -mt-1 text-gray-600">
								Cash Cash
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WaitingForDriver;
