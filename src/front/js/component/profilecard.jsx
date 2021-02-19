import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Card } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";

import "../../styles/home.scss";

export const Profiletemplate = props => {
	const { store, actions } = useContext(Context);

	return (
		<Card className="mb-2" style={{ width: "18rem" }}>
			<Card.Img className="cardTemplate" variant="top" />
			<Card.Body>
				<Card.Title className="titleCard">
					{props.name} {props.lastname}
				</Card.Title>
				<Card.Text className="descriptionCard">{props.description}</Card.Text>
				<div className="d-flex justify-content-between">
					<button className="cardButton btn btn-outline-warning">More Details</button>
					<button className="btn btn-outline-warning">
						<i className="fas fa-heart" />
					</button>
				</div>
			</Card.Body>
		</Card>
	);
};
Profiletemplate.propTypes = {
	name: PropTypes.string,
	lastname: PropTypes.string,
	description: PropTypes.string
};
