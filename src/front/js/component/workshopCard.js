import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { YellowButton } from "./yellowButton";
import { DeleteButton } from "./deleteButton";
import { EditButton } from "./editButton";
import { Link } from "react-router-dom";

export const WorkshopCard = props => {
	const { actions, store } = useContext(Context);

	return (
		<div className="workshopCard">
			<div className="cardInformation">
				<p className="workshopTitle">{props.item.title}</p>
				<div className="workshopDetails">
					<span className="date">Date: {props.item.date}</span>
					<span className="duration">Duration: {props.item.duration} hours</span>
					<span className="maxPeople">Pax: {props.item.max_people}</span>
					<span className="description">Description: {props.item.description}</span>
					<span className="categories">Categories: {props.item.categories} </span>
				</div>
			</div>
			<div className="buttons_workshopCard">
				<Link to={"/add_workshop/" + props.item.id}>
					<EditButton
						className="editButton_workshopCard"
						onClickForm={e => {
							actions.editWorkshop(e);
						}}
					/>
				</Link>
				<DeleteButton className="deleteButton_workshopCard" />
				<YellowButton className="yellowButton_workshopCard" text="Learn more" />
			</div>
		</div>
	);
};

WorkshopCard.propTypes = {
	item: PropTypes.object,
	yellowButtonText: PropTypes.string
};