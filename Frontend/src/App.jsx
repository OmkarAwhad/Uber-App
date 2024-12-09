import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import UserLogin from './pages/UserLogin'//-
import UserLogin from "./pages/Userlogin";
import UserSignup from "./pages/Usersignup";
import CaptainLogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/Captainsignup";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<UserLogin />} />
				<Route path="/signup" element={<UserSignup />} />
				<Route path="/captain-login" element={<CaptainLogin />} />
				<Route path="/captain-signup" element={<CaptainSignup />} />
			</Routes>
		</div>
	);
}

export default App;
