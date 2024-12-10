/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import UberLogoBlack from "../assets/UberLogoBlack.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { CaptainDataContext } from "../context/captainContext";
import axios from "axios";

function CaptainSignup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const [vehicleColor, setVehicleColor] = useState("");
	const [vehiclePlate, setVehiclePlate] = useState("");
	const [vehicleCapacity, setVehicleCapacity] = useState("");
	const [vehicleType, setVehicleType] = useState("Car");

	const { captain, setCaptain } = useContext(CaptainDataContext);

	const navigate = useNavigate();

	async function submitHandler(event) {
		event.preventDefault();
		const captainData = {
			fullname: {
				firstname: firstName,
				lastname: lastName,
			},
			email: email,
			password: password,
			vehicle: {
				color: vehicleColor,
				plate: vehiclePlate,
				capacity: vehicleCapacity,
				vehicleType: vehicleType,
			},
		};

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/captain/register`,
				captainData
			);
			if (response.status === 201) {
				setCaptain(response.data.captain);
				localStorage.setItem("captain-token", response.data.token);
				navigate("/captain-home");
			}
		} catch (error) {
			console.error(error);
			alert(
				error.response?.data?.message ||
					"Registration failed. Please try again."
			);
		}

		setEmail("");
		setFirstName("");
		setLastName("");
		setPassword("");
		setVehicleColor("");
		setVehiclePlate("");
		setVehicleCapacity("");
		setVehicleType("");
	}

	return (
		<div className="h-screen w-full flex flex-col justify-between py-6 px-6">
			<div>
				<Link to={"/"}>
					<img
						className="h-12"
						src={UberLogoBlack}
						alt="UberLogoBlack"
					/>
				</Link>
				<form onSubmit={(e) => submitHandler(e)}>
					<h3 className=" font-bold text-base px-1 pt-5 py-1 ">
						What&apos;s our Captain&apos;s name
					</h3>
					<div className=" flex gap-2 ">
						<input
							type="text"
							placeholder="First Name"
							value={firstName}
							onChange={(e) =>
								setFirstName(e.target.value)
							}
							required
							className=" px-4 py-2 rounded-md outline-none bg-[#eeee] w-full "
						/>
						<input
							type="text"
							placeholder="Last Name"
							required
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							className=" px-4 py-2 rounded-md outline-none bg-[#eeee] w-full "
						/>
					</div>

					<h3 className=" font-bold text-base px-1 pt-5 py-1 ">
						What&apos;s your email
					</h3>
					<input
						type="email"
						placeholder="email@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className=" px-4 py-2 rounded-md outline-none bg-[#eeee] w-full "
					/>

					<h3 className=" font-bold text-base px-1 pt-5 py-1 ">
						Enter Password
					</h3>
					<div className="flex justify-between px-4 items-center py-2 rounded-md bg-[#eeee] w-full">
						<input
							type={showPassword ? "text" : "password"}
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className=" w-[90%] bg-transparent outline-none "
						/>
						<span
							onClick={() =>
								setShowPassword(!showPassword)
							}
						>
							{showPassword ? <FaEye /> : <FaEyeSlash />}
						</span>
					</div>

					<h3 className="font-bold text-base px-1 pt-5 py-1">
						Vehicle Information
					</h3>
					<div className="flex gap-2">
						<input
							required
							className="px-4 py-2 rounded-md outline-none bg-[#eeee] w-full"
							type="text"
							placeholder="Vehicle Color"
							value={vehicleColor}
							onChange={(e) =>
								setVehicleColor(e.target.value)
							}
						/>
						<input
							required
							className="px-4 py-2 rounded-md outline-none bg-[#eeee] w-full"
							type="text"
							placeholder="Vehicle Plate"
							value={vehiclePlate}
							onChange={(e) =>
								setVehiclePlate(e.target.value)
							}
						/>
					</div>
					<div className="flex gap-2 pt-5">
						<input
							required
							className="px-4 py-2 rounded-md outline-none bg-[#eeee] w-full"
							type="number"
							placeholder="Vehicle Capacity"
							value={vehicleCapacity}
							onChange={(e) =>
								setVehicleCapacity(e.target.value)
							}
						/>
						<select
							required
							className="px-4 py-2 rounded-md outline-none bg-[#eeee] w-full"
							value={vehicleType}
							onChange={(e) =>
								setVehicleType(e.target.value)
							}
						>
							<option value="" disabled>
								Select Vehicle Type
							</option>
							<option value="car">Car</option>
							<option value="auto">Auto</option>
							<option value="motorcycle">
								Motorcycle
							</option>
						</select>
					</div>

					<button className=" bg-black w-full text-center px-3 py-2 rounded-md my-5 text-white font-semibold">
						Create account
					</button>

					<p className="text-sm font-semibold text-center">
						Already have an Captain Account?{" "}
						<Link
							to={"/captain-login"}
							className="text-blue-500"
						>
							Login
						</Link>
					</p>
				</form>
			</div>

			<p className="opacity-60 text-xs text-center font-medium ">
				This site is protected by reCAPTCHA and the{" "}
				<span className="underline">Google Privacy Policy</span> and{" "}
				<span className="underline">Terms of Service apply</span>
			</p>
		</div>
	);
}

export default CaptainSignup;
