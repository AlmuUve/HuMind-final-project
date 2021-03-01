import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";

import "../../styles/index.scss";

import { YellowButton } from "./yellowButton.js";

export const Workshops = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="templateWorkshop">
				<div className="ownerWorkshop">
					{props.item.owner_name} {props.item.owner_lastname} offers:
				</div>
				<div className="titleWorkshop">{props.item.title}</div>
				<div className="bodyWorkshop">
					<p>Date: {props.item.date}</p>
					<p>Maximum number of persons: {props.item.max_people}</p>
					<p>Price {props.item.price} €</p>
				</div>
				<div className="descriptionWorkshop">
					<p>{props.item.description}</p>
				</div>
				<div className="buttonTemplateWorkshop">
					<Link to="/">
						<YellowButton text="View More" />
					</Link>
				</div>
			</div>
		</>
	);
};
Workshops.propTypes = {
	item: PropTypes.object
};
