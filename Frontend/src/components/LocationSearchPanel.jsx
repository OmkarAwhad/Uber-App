/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

function LocationSearchPanel({ setVehiclePanelOpen, setPanelOpen }) {
	return (
		<>
			<div
				onClick={() => {
					setVehiclePanelOpen(true);
					setPanelOpen(false);
				}}
				className="flex gap-4 border-2 p-3 mx-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
			>
				<h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
					<IoLocationSharp />
				</h2>
				<h4 className="font-medium">lorem20</h4>
			</div>
         
         <div
				onClick={() => {
					setVehiclePanelOpen(true);
					setPanelOpen(false);
				}}
				className="flex gap-4 border-2 p-3 mx-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
			>
				<h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
					<IoLocationSharp />
				</h2>
				<h4 className="font-medium">lorem20</h4>
			</div>
         
         <div
				onClick={() => {
					setVehiclePanelOpen(true);
					setPanelOpen(false);
				}}
				className="flex gap-4 border-2 p-3 mx-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
			>
				<h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
					<IoLocationSharp />
				</h2>
				<h4 className="font-medium">lorem20</h4>
			</div>
         
         <div
				onClick={() => {
					setVehiclePanelOpen(true);
					setPanelOpen(false);
				}}
				className="flex gap-4 border-2 p-3 mx-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
			>
				<h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
					<IoLocationSharp />
				</h2>
				<h4 className="font-medium">lorem20</h4>
			</div>
         
         
			
		</>
	);
}

export default LocationSearchPanel;
