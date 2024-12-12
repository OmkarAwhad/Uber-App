/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CarImage from "../assets/CarImage.jpg";
import { RiArrowDownWideLine } from "react-icons/ri";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ConfirmRidePopUp({
	confirmRidePopUpState,
	setRidePopUpState,
	setConfirmRidePopUpState,
}) {
	const [otp, setOtp] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div
			className={`bg-white absolute -bottom-10 m-1 w-[98%] duration-500 transition-all  px-3  ${
				confirmRidePopUpState
					? " h-[105%] border-[1px] border-gray-200 rounded-md shadow-2xl shadow-black "
					: " h-0 "
			} `}
		>
			<div className=" mb-3 h-[11%] w-full ">
				<RiArrowDownWideLine
					onClick={() => setConfirmRidePopUpState(false)}
					className=" text-xl mt-1 text-gray-300 mx-auto "
				/>
				<h3 className="text-2xl font-semibold">
					Looking for a Driver
				</h3>
			</div>

			<div className="flex justify-between items-center bg-yellow-400 px-3 py-3 rounded-md ">
				<div className="flex gap-3 items-center ">
					<img
						className="w-16 h-16 rounded-full object-cover"
						src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
					<h2 className="text-base font-medium">Shubham Das</h2>
				</div>
				<p className="font-bold text-xl">2.2KM</p>
			</div>

			<div className="flex gap-2 justify-between flex-col items-center">
				<div className="w-full mt-2">
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

				<form
					onSubmit={(e) => submitHandler(e)}
					className="w-full flex flex-col gap-3 "
				>
					<input
						value={otp}
						onChange={(e) => setOtp(e.target.value)}
						type="text"
						placeholder="Enter OTP"
						className=" px-4 py-2 rounded-md font-mono outline-none bg-[#d6d6d6] w-full "
					/>
					<div className="flex gap-2 items-center justify-between ">
						<button
							className="w-full bg-red-700 py-2 px-8 rounded-lg font-semibold text-white text-lg "
							onClick={() => {
								setConfirmRidePopUpState(false);
								setRidePopUpState(false);
							}}
						>
							Cancel
						</button>

						<Link
							to={"/captain-riding"}
							className="w-full px-8 bg-green-600 py-2 flex justify-center rounded-lg font-semibold text-white text-lg "
						>
							Confirm
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ConfirmRidePopUp;
