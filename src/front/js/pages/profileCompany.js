import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import { Profiletemplate } from "../component/profilecard.jsx";
import { Coverphoto } from "../component/coverphoto.jsx";

export const Profilecompany = () => {
	const { store, actions } = useContext(Context);

	console.log(store.userCompany);

	let profileCompany = store.userCompany.map((item, index) => {
		return <Profiletemplate item={item} key={index.toString()} />;
	});

	return (
		<>
			<div className="container-fluid">
				<Coverphoto />
			</div>
			<div className="container">
				<div className="row">{profileCompany}</div>
			</div>
		</>
	);
};
