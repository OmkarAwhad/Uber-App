/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

function userContext({ children }) {
	const [user, setUser] = useState({
		email: "",
		fullName: {
			firstName: "",
			lastName: "",
		},
	});
	const [isLoading, setIsLoading] = useState(false);

	const value = {
		user,
		setUser,
		isLoading,
      setIsLoading,
	}

	return (
		<div>
			<UserDataContext.Provider value={value}>
				{children}
			</UserDataContext.Provider>
		</div>
	);
}

export default userContext;
