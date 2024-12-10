/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/captainContext";
import axios from "axios";

function CaptainProtectedWrapper({ children }) {
	const token = localStorage.getItem("captain-token");
	const navigate = useNavigate();
	const { captain, setCaptain, isLoading, setIsLoading } =
		useContext(CaptainDataContext);

	useEffect(() => {
		if (!token) {
			navigate("/captain-login");
		}

		axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
			headers: {
				Authorization: `Bearer ${token}`, // Token as a string
			},
		})
			.then((response) => {
				if (response.status === 201) {
					setCaptain(response.data.captain);
					setIsLoading(false);
				}
			})
			.catch((error) => {
				console.log(error);
				localStorage.removeItem("captain-token");
				navigate("/captain-login");
			});
	}, [token]);

	if (isLoading)
		return (
			<div className="flex items-center justify-center text-lg font-semibold ">
				Loading...
			</div>
		);

	return <>{children}</>;
}

export default CaptainProtectedWrapper;
