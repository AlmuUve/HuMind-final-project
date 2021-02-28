import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import { Workshopform } from "../component/workshopform.jsx";
import { EditButton } from "../component/editButton";

export const Addworkshop = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row titleAddWorkshop">
					<h2>ADD A NEW WORKSHOP</h2>
				</div>
				<Workshopform />
				{/* EL EDIT BUTTON ESTA SOLO PARA PROBAR EL PUT */}
				<EditButton />
			</div>
		</>
	);
};
