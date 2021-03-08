import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";

import "../../styles/index.scss";

import { YellowButton } from "./yellowButton.js";

export const Profiletemplatecompany = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="imgProfile">
				<img
					className="avatar"
					src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
				/>
			</div>
			<div className="bodyCard">
				<div className="titleCard">{store.user.company_name}</div>
				<div className="descriptionCard">
					<p>{store.user.company_number}</p>
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