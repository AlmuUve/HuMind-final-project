import React, { useContext, useEffect, useReducer, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { Profiletemplatepsy } from "../component/profilecardpsychologist.jsx";
import { Profiletemplatecompany } from "../component/profilecardcompany.jsx";
import { Coverphoto } from "../component/coverphoto.jsx";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getUser();
	}, []);

	if (store.help) {
		return (
			<>
				<div className="container-fluid">
					<Coverphoto photo="coverPhotoPsy" />
				</div>
				<div className="container">
					<div className="row">
						<Profiletemplatepsy />
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="container-fluid">
				<Coverphoto photo="coverPhotoCompany" />
			</div>
			<div className="container">
				<div className="row">
					<Profiletemplatecompany />
				</div>
			</div>
		</>
	);
};
