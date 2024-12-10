/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import UberLogoBlack from "../assets/UberLogoBlack.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { CaptainDataContext } from "../context/captainContext";
import axios from "axios";

function CaptainLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [captainData, setCaptainData] = useState({});

	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();
	const { captain, setCaptain } = useContext(CaptainDataContext);

	async function submitHandler(event) {
		event.preventDefault();
		const captainData = {
			email: email,
			password: password,
		};

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/captain/login`,
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
					"Invalid email or password."
			);
		}

		setEmail("");
		setPassword("");
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

					<button className=" bg-black w-full text-center px-3 py-2 rounded-md my-5 text-white font-semibold">
						Login
					</button>

					<p className="text-sm font-semibold text-center">
						Join a fleet.{" "}
						<Link
							to={"/captain-signup"}
							className="text-blue-500"
						>
							Register as a Captain
						</Link>
					</p>
				</form>
			</div>

			<div className=" bg-[#f3c164] text-center text-lg text-white py-2 rounded-md font-semibold ">
				<Link to={"/login"}>Sign in as User</Link>
			</div>
		</div>
	);
}

export default CaptainLogin;
