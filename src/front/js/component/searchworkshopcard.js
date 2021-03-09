import React, { Component, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton.js";
import { EditButton } from "./editButton.js";
import { DeleteButton } from "./deleteButton.js";

export const SearchWorkshopCard = props => {
	return (
		<>
			<div className="workshopCard">
				<div className="cardInformation">
					<span className="title">{props.item.category_id}</span>
					<div className="workshopDetails">
						<span className="date">
							Date:
							{props.item.date}
						</span>
						<span className="duration">
							Duration:
							{props.item.duration}
						</span>
						<span className="maxPeople">
							Maximum number of persons:
							{props.item.max_people}
						</span>
						<span className="prize">
							Maximum price
							{props.item.max_price} €
						</span>
					</div>
				</div>
				<div className="buttons_workshopCard">
					<Link to={"/add_workshop/" + props.item.id}>
						<EditButton
							className="editButton"
							onClickForm={e => {
								actions.editWorkshop(e);
							}}
						/>
					</Link>
					<DeleteButton className="deleteButton" />
					<Link to="/">
						<YellowButton text="Contact" />
					</Link>
				</div>
			</div>
		</>
	);
};

SearchWorkshopCard.propTypes = {
	item: PropTypes.object
};
