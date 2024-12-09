import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

function userContext({ children }) {
	const [value, setValue] = useState({
		email: "",
		fullName: {
			firstName: "",
			lastName: "",
		},
	});

	return (
		<div>
			<UserDataContext.Provider value={value}>
				{children}
			</UserDataContext.Provider>
		</div>
	);
}

export default userContext;
