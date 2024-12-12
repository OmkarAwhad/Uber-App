/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UberMap from "../assets/UberMap.png";
import { MdLogout } from "react-icons/md";
import UberLogoBlack from "../assets/UberLogoBlack.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

function CaptainHome() {
	const [RidePopUpState, setRidePopUpState] = useState(true);
	const [confirmRidePopUpState, setConfirmRidePopUpState] = useState(false);

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

			<div className="h-3/5">
				<img
					className="h-full w-full object-cover "
					src={UberMap}
					alt="Map"
				/>
			</div>

			<div>
				<CaptainDetails />
			</div>

			<div className=" h-full ">
				<RidePopUp
					RidePopUpState={RidePopUpState}
               setRidePopUpState={setRidePopUpState}
					setConfirmRidePopUpState={setConfirmRidePopUpState}
				/>
			</div>

         <div className=" h-screen">
				<ConfirmRidePopUp
					confirmRidePopUpState={confirmRidePopUpState}
               setRidePopUpState={setRidePopUpState}
					setConfirmRidePopUpState={setConfirmRidePopUpState}
				/>
			</div>
		</div>
	);
}

export default CaptainHome;
