import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/index.scss";
import { YellowButton } from "./yellowButton.js";

export const Profiletemplatepsy = props => {
	const { store, actions } = useContext(Context);

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
					{store.user.name} {store.user.lastname}
				</div>
				<div className="descriptionCard">
					<p>{store.user.speciality}</p>
					<p>{store.user.association_number}</p>
					<p>{store.user.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={store.user.email} />
				</div>
				<YellowButton text="Edit Profile" />
			</div>
		</>
	);
};
