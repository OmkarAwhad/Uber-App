/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UberLogoBlack from "../assets/UberLogoBlack.png";
import UberMap from "../assets/UberMap.png";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import { RiArrowDownWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import { RiArrowDownWideLine } from "react-icons/ri";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

function Home() {
	const [pickup, setPickup] = useState("");
	const [destination, setDestination] = useState("");
	const [panelOpen, setPanelOpen] = useState(false);
	const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
	const [confirmRidePanel, setConfirmRidePanel] = useState(false);
	const [vehicleFound, setVehicleFound] = useState(false);
	const [waitingForDriver, setWaitingForDriver] = useState(false);

	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<div className=" h-screen relative overflow-y-hidden ">
			<img
				className=" absolute h-16 left-4 "
				src={UberLogoBlack}
				alt="UberLogoBlack"
			/>

			<div>
				<img
					className=" h-screen w-full object-cover "
					src={UberMap}
					alt="Map"
				/>
			</div>

			<div className="absolute top-0 flex flex-col justify-end w-full h-screen ">
				<div
					className={`bg-white w-full absolute bottom-0 duration-500 transition-all   ${
						panelOpen ? " h-[100%] " : " h-[25%] "
					} `}
				>
					<div className="bg-white absolute flex w-full flex-col justify-start gap-2 px-4 pb-4 h-1/4 rounded-t-xl  pt-4 ">
						<div
							className={` w-full flex ${
								panelOpen
									? "justify-end"
									: "justify-start"
							}`}
						>
							{panelOpen ? (
								<div className=" text-end w-8 h-8 flex justify-center items-center mx-2 bg-gray-100 rounded-full">
									<RiArrowDownWideFill
										onClick={() =>
											setPanelOpen(false)
										}
										className=" text-lg text-gray-800 "
									/>
								</div>
							) : (
								<h4 className=" text-2xl  font-bold px-3">
									Find a trip
								</h4>
							)}
						</div>
						{/* <h4 className="text-2xl font-bold">Find a trip</h4> */}

						<form
							className="space-y-2 "
							onSubmit={(e) => submitHandler(e)}
						>
							<div className="flex justify-start gap-3 items-center bg-[#eee] px-8 py-2 mt-3 w-full rounded-lg  ">
								<BiCurrentLocation className=" absolute left-6 " />
								<input
									type="text"
									className="outline-none w-full bg-transparent "
									placeholder="Enter your location"
									onClick={() => setPanelOpen(true)}
									value={pickup}
									onChange={(e) =>
										setPickup(e.target.value)
									}
								/>
							</div>
							<div className="flex justify-start gap-3 items-center bg-[#eee] px-8 py-2 mt-3 w-full rounded-lg ">
								<GrLocationPin className=" absolute left-6 " />
								<input
									type="text"
									className="outline-none w-full bg-transparent "
									placeholder="Enter your Destination"
									onClick={() => setPanelOpen(true)}
									value={destination}
									onChange={(e) =>
										setDestination(e.target.value)
									}
								/>
							</div>
						</form>
					</div>

					<div
						className={`bg-white w-full absolute bottom-0 duration-500 transition-all   ${
							panelOpen ? " h-[75%] " : " h-0 "
						} `}
					>
						<LocationSearchPanel
							setPanelOpen={setPanelOpen}
							setVehiclePanelOpen={setVehiclePanelOpen}
						/>
					</div>
				</div>

				<div
					className={`bg-white absolute -bottom-10 m-1  w-[98%] duration-500 transition-all  px-3  ${
						vehiclePanelOpen
							? " h-[80%] border-[1px] border-gray-200 rounded-md shadow-2xl shadow-black "
							: " h-0 "
					} `}
				>
					<div className=" mb-3 h-[11%] w-full ">
						<RiArrowDownWideLine
							onClick={() => setVehiclePanelOpen(false)}
							className=" text-xl mt-1 text-gray-300 mx-auto "
						/>
						<h3 className="text-2xl font-semibold">
							Choose a Vehicle
						</h3>
					</div>
					<div className=" h-full overflow-y-auto ">
						<VehiclePanel
							setConfirmRidePanel={setConfirmRidePanel}
						/>
					</div>
				</div>

				<div
					className={`bg-white absolute -bottom-10 m-1 w-[98%] duration-500 transition-all  px-3  ${
						confirmRidePanel
							? " h-[80%] border-[1px] border-gray-200 rounded-md shadow-2xl shadow-black "
							: " h-0 "
					} `}
				>
					<div className=" mb-3 h-[15%] w-full ">
						<RiArrowDownWideLine
							onClick={() => setConfirmRidePanel(false)}
							className=" text-xl mt-1 text-gray-300 mx-auto "
						/>
						<h3 className="text-2xl font-semibold">
							Confirm your Ride
						</h3>
					</div>
					<div className=" h-full overflow-y-auto scroll-m-0 ">
						<ConfirmRide
							setConfirmRidePanel={setConfirmRidePanel}
							setVehicleFound={setVehicleFound}
						/>
					</div>
				</div>

				<div
					className={`bg-white absolute -bottom-10 m-1 w-[98%] duration-500 transition-all  px-3  ${
						vehicleFound
							? " h-[80%] border-[1px] border-gray-200 rounded-md shadow-2xl shadow-black "
							: " h-0 "
					} `}
				>
					<div className=" mb-3 h-[15%] w-full ">
						<RiArrowDownWideLine
							onClick={() => setVehicleFound(false)}
							className=" text-xl mt-1 text-gray-300 mx-auto "
						/>
						{/* <h3 className="text-2xl font-semibold">
							Confirm your Ride
						</h3> */}
					</div>
					<div className=" h-full overflow-y-auto scroll-m-0 ">
						<WaitingForDriver
							setVehicleFound={setVehicleFound}
							setWaitingForDriver={setWaitingForDriver}
							waitingForDriver={waitingForDriver}
						/>
					</div>
				</div>

				<div className=" h-full  ">
					<LookingForDriver
						setWaitingForDriver={setWaitingForDriver}
						waitingForDriver={waitingForDriver}
						setVehicleFound={setVehicleFound}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
