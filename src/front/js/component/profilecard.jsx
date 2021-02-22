import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";

import "../../styles/home.scss";

import EditButton from "../component/editButton.jsx"

export const Profiletemplate = props => {
	const { store, actions } = useContext(Context);

	const toUpperCase = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<div className="col-lg-4 col-sm-12 profileCard">
			<div className="imgProfile">
				<img className="avatar" src="https://assets.breatheco.de/apis/img/icon/4geeks.png" />
			</div>
			<div className="bodyCard">
				<div className="titleCard">{toUpperCase(props.item.company_name)}</div>
				<div className="descriptionCard">
					<p>{props.item.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={props.item.email} />
					<EditButton />
				</div>
			</div>
		</div>
	);
};
Profiletemplate.propTypes = {
	item: PropTypes.object
};
