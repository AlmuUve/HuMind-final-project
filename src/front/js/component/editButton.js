import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const EditButton = () => {
	const { store, actions } = useContext(Context);

	//**ESTA VARIABLE ERA PARA VER SI FUNCIONA EL PUT DESDE EL FRON Y TODO PARECE QUE VA BIEN. */

	let search_workshop = {
		duration: "20 horas",
		price: 565,
		date: "2021/5/25",
		max_people: 12,
		category_id: 2
	};

	return (
		<button className="editButton" onClick={() => actions.editSearchWorkshop(search_workshop)}>
			{" "}
			<i className="far fa-edit editButton" />
		</button>
	);
};
