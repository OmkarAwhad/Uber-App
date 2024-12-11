/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CarImage from "../assets/CarImage.jpg";
import { RiArrowDownWideLine } from "react-icons/ri";

const LookingForDriver = ({setVehicleFound}) => {
	return (
		<div>
			{/* <h5
				className="p-1 text-center w-[93%] absolute top-0"
				onClick={() => {
					setVehicleFound(false);
				}}
			>
				<RiArrowDownWideLine/>
			</h5>
			<h3 className="text-2xl font-semibold mb-5">
				Looking for a Driver
			</h3> */}

			<div className="flex gap-2 justify-between flex-col items-center">
				<img
					className="h-20"
					src={CarImage}
					alt=""
				/>
				<div className="w-full mt-5">
					<div className="flex items-center gap-5 p-3 border-b-2">
						<i className="ri-map-pin-user-fill"></i>
						<div>
							<h3 className="text-lg font-medium">
								562/11-A
							</h3>
							<p className="text-sm -mt-1 text-gray-600">
								*Pickup*
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
								*destination*
							</p>
						</div>
					</div>
					<div className="flex items-center gap-5 p-3">
						<i className="ri-currency-line"></i>
						<div>
							<h3 className="text-lg font-medium">
								₹Fare and vehicle type
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

export default LookingForDriver;