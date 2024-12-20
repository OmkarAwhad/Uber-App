/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CarImage from "../assets/CarImage.jpg";
import { RiArrowDownWideLine } from "react-icons/ri";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";

const LookingForDriver = ({
	setVehicleFound,
	waitingForDriver,
	setWaitingForDriver,
}) => {
	return (
		<div
			className={`bg-white absolute -bottom-10 m-1 w-[98%] duration-500 transition-all  px-3  ${
				waitingForDriver
					? " h-[80%] border-[1px] border-gray-200 rounded-md shadow-2xl shadow-black "
					: " h-0 "
			} `}
		>
			<div className=" mb-3 h-[15%] w-full ">
				<RiArrowDownWideLine
					onClick={() => setWaitingForDriver(false)}
					className=" text-xl mt-1 text-gray-300 mx-auto "
				/>
				<h3 className="text-2xl font-semibold">
					Looking for a Driver
				</h3>
			</div>

			<div className="flex gap-2 justify-between flex-col items-center">
				<img className="h-20" src={CarImage} alt="" />
				<div className="w-full mt-5">
					<div className="flex items-center gap-5 p-3 border-b-2">
						<RiMapPinUserFill className="text-2xl font-semibold" />
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
						<MdLocationPin className="text-2xl font-semibold" />
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
						<IoCashOutline className="text-2xl font-semibold" />
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
