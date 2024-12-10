/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function CaptainLogout() {
	const navigate = useNavigate();
	const token = localStorage.getItem("captain-token");

	axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((response) => {
		if (response.status === 201) {
			localStorage.removeItem("captain-token");
			navigate("/captain-login");
		}
	});

	return <div>CaptainLogout</div>;
}

export default CaptainLogout;
