/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

function captainContext({ children }) {
	const [captain, setCaptain] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const updateCaptain = (captainData) => {
		setCaptain(captainData);
	};

	const value = {
		captain,
		setCaptain,
		isLoading,
		setIsLoading,
		error,
		setError,
		updateCaptain,
	};

	return (
		<div>
			<CaptainDataContext.Provider value={value}>
				{children}
			</CaptainDataContext.Provider>
		</div>
	);
}

export default captainContext;
