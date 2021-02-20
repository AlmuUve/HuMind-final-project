import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";

import "../../styles/home.scss";

export const Profiletemplate = props => {
	const { store, actions } = useContext(Context);

	const toUpperCase = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<div className="col-lg-4 col-sm-12 profileCard">
			<div className="imgProfile">
				<img
					className="avatar"
					src="https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
				/>
			</div>
			<div className="bodyCard">
				<div className="titleCard">
					{toUpperCase(props.item.name)} {toUpperCase(props.item.lastname)}
				</div>
				<div className="descriptionCard">
					<p>{props.item.speciality}</p>
					<p>{props.item.association_number}</p>
					<p>{props.item.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={props.item.email} />
					<button className="btn btn-outline-warning">Edit Profile</button>
				</div>
			</div>
		</div>
	);
};
Profiletemplate.propTypes = {
	item: PropTypes.object
};
