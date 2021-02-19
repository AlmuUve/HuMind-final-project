import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

import { Profiletemplate } from "../component/profilecard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const userPsychologist = [store.user, [store.userPsychologist]];

	let profilePsychologist = userPsychologist.flat().map((item, index) => {
		return (
			<Profiletemplate
				name={item.name}
				lastname={item.lastname}
				description={item.description}
				key={index.toString()}
			/>
		);
	});

	return (
		<div className="text-center mt-5">
			<h1>{profilePsychologist}</h1>
		</div>
	);
};
