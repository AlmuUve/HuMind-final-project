import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { YellowButton } from "./yellowButton";
import { DeleteButton } from "./deleteButton";
import { EditButton } from "./editButton";

export const WorkshopCard = props => {
	const { actions, store } = useContext(Context);

	return (
		<div className="workshopCard">
			<div className="cardInformation">
				<p className="workshopTitle">{props.item.title}</p>
				<div className="details">
					<span className="date">{props.item.date}</span>
					<span className="duration">{props.item.duration}</span>
					<span className="pax">{props.item.max_people}</span>
					<span className="description">{props.item.description}</span>
				</div>
			</div>
			<div className="buttons_workshopCard">
				<div className="deleteAndEditButtons">
					<EditButton className="editButton_workshopCard" />
					<DeleteButton className="deleteButton_workshopCard" />
				</div>
				<YellowButton className="yellowButton_workshopCard" />
			</div>
		</div>
	);
};

WorkshopCard.propTypes = {
	item: PropTypes.object
	// text: PropTypes.string
};
