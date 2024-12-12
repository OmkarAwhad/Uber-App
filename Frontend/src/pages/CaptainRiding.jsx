/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UberMap from "../assets/UberMap.png";
import { MdLogout } from "react-icons/md";
import UberLogoBlack from "../assets/UberLogoBlack.png";
import { RiArrowUpWideLine } from "react-icons/ri";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {
	const [finishRidePanel, setFinishRidePanel] = useState(false);

	return (
		<div className="relative h-screen w-full overflow-y-hidden">
			<div className="flex justify-between items-center w-full absolute px-3 pt-1">
				<img
					className="h-14 "
					src={UberLogoBlack}
					alt="UberLogoBlack"
				/>

				<Link
					to={"/captain-home"}
					className=" w-10 h-10 flex bg-gray-100 rounded-full items-center justify-center text-lg m-2 shadow-sm shadow-black "
				>
					<MdLogout />
				</Link>
			</div>

			<div className="h-4/5">
				<img
					className="h-full w-full object-cover "
					src={UberMap}
					alt="Map"
				/>
			</div>

			<div
				onClick={() => setFinishRidePanel(true)}
				className="h-1/5 w-[98%] mx-1 flex relative bg-yellow-300 rounded-t-md p-4 "
			>
				<h5 className="absolute left-1/2 top-2 font-semibold text-2xl text-gray-100 ">
					<RiArrowUpWideLine />
				</h5>
				<div className="flex justify-between w-full items-center">
					<h4 className="font-bold text-xl ">5 KM away</h4>
					<button className="font-semibold px-4 py-2 bg-green-500 text-white rounded-md ">
						Complete Ride
					</button>
				</div>
			</div>

			<div>
				<FinishRide
					finishRidePanel={finishRidePanel}
					setFinishRidePanel={setFinishRidePanel}
					// setConfirmRidePopUpState={setConfirmRidePopUpState}
				/>
			</div>
		</div>
	);
}

export default CaptainRiding;
