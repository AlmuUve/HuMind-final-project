import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import { Profiletemplate } from "../component/profilecard.jsx";
import { Coverphoto } from "../component/coverphoto.jsx";

export const Profilepsychologist = () => {
	const { store, actions } = useContext(Context);

	console.log(store.userPsychologist);

	let profilePsychologist = store.userPsychologist.map((item, index) => {
		return <Profiletemplate item={item} key={index.toString()} />;
	});

	return (
		<>
			<div className="container-fluid">
				<Coverphoto />
			</div>
			<div className="container">
				<div className="row">{profilePsychologist}</div>
			</div>
		</>
	);
};
