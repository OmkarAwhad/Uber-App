import React, { useState } from "react";
import UberLogoBlack from "../assets/UberLogoBlack.png";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const UserLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userData, setUserData] = useState({});

	const [showPassword, setShowPassword] = useState(false);

	function submitHandler(event) {
		event.preventDefault();
		setUserData({ email: email, password: password });
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
						What's your email
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
						New here?{" "}
						<Link to={"/signup"} className="text-blue-500">
							Create new Account
						</Link>
					</p>
				</form>
			</div>

			<div className=" bg-[#10b461] text-center text-lg text-white py-2 rounded-md font-semibold ">
				<Link to={"/captain-login"}>Sign in as Captain</Link>
			</div>
		</div>
	);
};

export default UserLogin;
