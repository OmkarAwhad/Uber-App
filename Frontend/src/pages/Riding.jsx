/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import UberLogoBlack from "../assets/UberLogoBlack.png";
import UberMap from "../assets/UberMap.png";
import CarImage from "../assets/CarImage.jpg";
// import { RiArrowDownWideLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";

function Riding() {
	return (
		<div className="relative h-screen w-full">
			<Link
				to={"/home"}
				className="absolute w-10 h-10 flex bg-gray-100 rounded-full items-center justify-center text-lg m-2 shadow-md shadow-black "
			>
				<IoHomeSharp />
			</Link>

			<div className="h-2/5">
				<img
					className="h-full w-full object-cover "
					src={UberMap}
					alt="Map"
				/>
			</div>

			<div className="flex px-3 items-center justify-between">
				<img className="h-12" src={CarImage} alt="" />
				<div className="text-right pr-4">
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
						<i className="ri-map-pin-user-fill"></i>
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
						<i className="text-lg ri-map-pin-2-fill"></i>
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
						<i className="ri-currency-line"></i>
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

			<div className="bg-green-600 text-white mx-auto w-[85%] text-center py-2 rounded-md font-semibold ">
				<button>Make a Payment</button>
			</div>
		</div>
	);
}

export default Riding;
