import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const EditButton = () => {
	const { store, actions } = useContext(Context);

	return (
		<button className="editButton">
			{" "}
			<i className="far fa-edit editButton" />
		</button>
	);
};
