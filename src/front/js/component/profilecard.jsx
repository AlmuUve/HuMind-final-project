import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";

import "../../styles/index.scss";

import { YellowButton } from "./yellowButton.js";

export const Profiletemplate = props => {
	const { store, actions } = useContext(Context);

	// const toUpperCase = str => {
	// // 	return str.charAt(0).toUpperCase() + str.slice(1);
	// // };

	return (
		<div className="col-lg-4 col-sm-12 profileCard">
			<div className="imgProfile">
				<img className="avatar" src="https://assets.breatheco.de/apis/img/icon/4geeks.png" />
			</div>
			<div className="bodyCard">
				<div className="titleCard">
					{props.item.name} {props.item.lastname}
					{props.item.company_name}
				</div>
				<div className="descriptionCard">
					<p>{props.item.speciality}</p>
					<p>{props.item.association_number}</p>
					<p>{props.item.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={props.item.email} />
				</div>
				<YellowButton text="Edit Profile" />
			</div>
		</div>
	);
};
Profiletemplate.propTypes = {
	item: PropTypes.object
};
