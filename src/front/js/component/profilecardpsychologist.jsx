import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { YellowButton } from "./yellowButton.js";
import "../../styles/index.scss";

export const Profiletemplatepsy = props => {
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(false);
	return (
		<>
			<div className="imgProfile">
				<img
					className="avatar"
					src="https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
				/>
			</div>
			<div className="bodyCard">
				<div className="titleCard">
					{store.LoggedUser.name} {store.LoggedUser.lastname}
				</div>
				<div className="descriptionCard">
					<p>{store.LoggedUser.speciality}</p>
					<p>{store.LoggedUser.association_number}</p>
					<p>{store.LoggedUser.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={store.LoggedUser.email} />
				</div>
				<Link to="/edit_profile">
					<YellowButton text="Edit Profile"></YellowButton>
				</Link>
			</div>
		</>
	);
};
