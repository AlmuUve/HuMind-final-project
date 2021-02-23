import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";
import { Workshopform } from "../component/workshopform.jsx";

export const Addworkshop = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<Workshopform />
			</div>
		</>
	);
};
