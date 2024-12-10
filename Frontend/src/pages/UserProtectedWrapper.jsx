/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";

function UserProtectedWrapper({ children }) {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const { user, setUser, isLoading, setIsLoading } =
		useContext(UserDataContext);

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}

		axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				if (response.status === 201) {
					setUser(response.data.user);
					setIsLoading(false);
				}
			})
			.catch((error) => {
				console.log(error);
				localStorage.removeItem("token");
				navigate("/login");
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

export default UserProtectedWrapper;
