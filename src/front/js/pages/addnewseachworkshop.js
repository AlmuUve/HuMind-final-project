import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import { Searchworkshopform } from "../component/searchworkshopform.jsx";

export const Addsearchworkshop = () => {
	const { store, actions } = useContext(Context);

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
};
