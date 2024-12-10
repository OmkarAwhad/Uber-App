/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import UberLogoBlack from "../assets/UberLogoBlack.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

function UserSignup() {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	// const [userData, setUserData] = useState({});

	const { user, setUser } = useContext(UserDataContext);

	const navigate = useNavigate();

	async function submitHandler(event) {
		event.preventDefault();
		const newUser = {
			fullname: {
				firstname: firstName,
				lastname: lastName,
			},
			email: email,
			password: password,
		};

		const response = await axios.post(
			`${import.meta.env.VITE_BASE_URL}/users/register`,
			newUser
		);

		if (response.status === 201) {
			setUser(response.data.user);
			localStorage.setItem('token', response.data.token);
			navigate("/home");
		}

		setEmail("");
		setFirstName("");
		setLastName("");
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
						What&apos;s your name
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

					<button className=" bg-black w-full text-center px-3 py-2 rounded-md my-5 text-white font-semibold">
						Create account
					</button>

					<p className="text-sm font-semibold text-center">
						Already have an Account?{" "}
						<Link to={"/login"} className="text-blue-500">
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

export default UserSignup;
