/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdTime } from "react-icons/io";
import { MdSpeed } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";

function CaptainDetails() {
	return (
		<div className="px-5 h-2/5 py-5 flex flex-col gap-3">
			<div className="flex justify-between items-center">
				<div className="flex items-center justify-between">
					<img
						className="h-12 w-12 rounded-full object-cover"
						src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
					<p className="text-xl px-3 font-semibold">John Doe</p>
				</div>
				<div className="flex flex-col items-center">
					<h4 className="font-bold text-lg px-2 ">₹295.20</h4>
					<p className="font-thin text-sm ">Earned</p>
				</div>
			</div>

			<div className="flex items-center justify-between gap-3 px-3 my-2 bg-gray-200 py-4 rounded-lg ">
				<div className="flex flex-col items-center gap-1 ">
					<IoMdTime className="text-3xl font-semibold" />
					<h4 className="font-semibold ">10.2</h4>
					<p className="text-gray-600 text-sm ">Hours Online</p>
				</div>
				<div className="flex flex-col items-center gap-1 ">
					<MdSpeed className="text-3xl font-semibold" />
					<h4 className="font-semibold ">10.2</h4>
					<p className="text-gray-600 text-sm ">Hours Online</p>
				</div>
				<div className="flex flex-col items-center gap-1 ">
					<LuNotebookPen className="text-2xl font-semibold" />
					<h4 className="font-semibold ">10.2</h4>
					<p className="text-gray-600 text-sm ">Hours Online</p>
				</div>
			</div>
		</div>
	);
}

export default CaptainDetails;
