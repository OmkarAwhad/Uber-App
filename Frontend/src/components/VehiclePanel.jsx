/* eslint-disable no-unused-vars */
import React from "react";
import AutoImage from "../assets/AutoImage.webp";
import BikeImage from "../assets/BikeImage.webp";
import CarImage from "../assets/CarImage.jpg";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const VehiclePanel = (props) => {
	return (
		<div>
			{/* <div className="flex flex-row gap-2 items-center mb-3 h-[50%] ">
				<IoMdArrowDropdownCircle className=" text-xl mt-1 text-gray-600 " />
				<h3 className="text-2xl font-semibold">
					Choose a Vehicle
				</h3>
			</div> */}

			<div className="flex border-2 active:border-black h-fit  mb-2 rounded-xl w-full py-3 px-3 items-center justify-between">
				<img className="h-10 w-[20%] " src={CarImage} alt="" />
				<div className="ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						UberGo{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">2 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable, compact rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>

			<div className="flex border-2 active:border-black mb-2 rounded-xl w-full py-3 px-3  items-center justify-between">
				<img className="h-10 w-[25%]" src={BikeImage} alt="" />
				<div className="-ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						Moto{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">3 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable motorcycle rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>

			<div className="flex border-2 active:border-black mb-2 rounded-xl w-full py-3 px-3  items-center justify-between">
				<img className="h-10 w-[20%]" src={AutoImage} alt="" />
				<div className="ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						UberAuto{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">3 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable Auto rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>

         <div className="flex border-2 active:border-black h-fit  mb-2 rounded-xl w-full py-3 px-3 items-center justify-between">
				<img className="h-10 w-[20%] " src={CarImage} alt="" />
				<div className="ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						UberGo{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">2 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable, compact rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>

			<div className="flex border-2 active:border-black mb-2 rounded-xl w-full py-3 px-3  items-center justify-between">
				<img className="h-10 w-[25%]" src={BikeImage} alt="" />
				<div className="-ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						Moto{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">3 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable motorcycle rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>

			<div className="flex border-2 active:border-black mb-2 rounded-xl w-full py-3 px-3  items-center justify-between">
				<img className="h-10 w-[20%]" src={AutoImage} alt="" />
				<div className="ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						UberAuto{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">3 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable Auto rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>
         
         <div className="flex border-2 active:border-black h-fit  mb-2 rounded-xl w-full py-3 px-3 items-center justify-between">
				<img className="h-10 w-[20%] " src={CarImage} alt="" />
				<div className="ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						UberGo{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">2 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable, compact rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>

			<div className="flex border-2 active:border-black mb-2 rounded-xl w-full py-3 px-3  items-center justify-between">
				<img className="h-10 w-[25%]" src={BikeImage} alt="" />
				<div className="-ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						Moto{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">3 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable motorcycle rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>

			<div className="flex border-2 active:border-black mb-2 rounded-xl w-full py-3 px-3  items-center justify-between">
				<img className="h-10 w-[20%]" src={AutoImage} alt="" />
				<div className="ml-2 w-[50%]">
					<h4 className="font-medium flex gap-3 items-center text-base">
						UberAuto{" "}
						<span className="flex items-center gap-2">
							<FaUser />4
						</span>
					</h4>
					<h5 className="font-medium text-sm">3 mins away </h5>
					<p className="font-normal text-xs text-gray-600">
						Affordable Auto rides
					</p>
				</div>
				<h2 className="text-lg w-[25%] font-semibold">₹2555.55</h2>
			</div>

			
		</div>
	);
};

export default VehiclePanel;
