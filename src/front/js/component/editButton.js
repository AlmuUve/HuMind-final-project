import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const EditButton = () => {
	const { store, actions } = useContext(Context);

	//**ESTA VARIABLE ERA PARA VER SI FUNCIONA EL PUT DESDE EL FRON Y TODO PARECE QUE VA BIEN. */

	let workshop = {
		title: "Probamos a cambiar un workshop desde el front por segunda vez",
		duration: "20 horas",
		price: 5650,
		date: "2021/5/25",
		max_people: 12,
		description: "cambio workshop desde el fron",
		category_info: [2, 3]
	};

	return (
		<button className="editButton" onClick={() => actions.editWorkshop(workshop)}>
			{" "}
			<i className="far fa-edit editButton" />
		</button>
	);
};
