import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import { Workshopform } from "../component/workshopform.jsx";
import { Searchworkshopform } from "../component/searchworkshopform.jsx";

import { EditButton } from "../component/editButton";

export const Addworkshop = () => {
	const { store, actions } = useContext(Context);

	if (store.help) {
		return (
			<>
				<div className="container">
					<div className="row titleAddWorkshop">
						<h2>ADD A NEW WORKSHOP</h2>
					</div>
					<Workshopform />
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="container">
					<div className="row titleAddSearchWorkshop">
						<h2>WHAT ARE YOU SEARCHING FOR?</h2>
					</div>
					<Searchworkshopform />
				</div>
			</>
		);
	}
};
