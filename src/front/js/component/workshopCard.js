import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { YellowButton } from "./yellowButton";
import { DeleteButton } from "./deleteButton";
import { EditButton } from "./editButton";
import { Link } from "react-router-dom";
import { Categorylabel } from "./FeedComponent/categoryinworkshops.jsx";

export const WorkshopCard = props => {
	const { actions, store } = useContext(Context);
	const [editAndDeleteButton, setEditAndDeleteButton] = useState(
		<div>
			<Link to={"/add_workshop/" + props.item.id}>
				<EditButton
					className="editButton_workshopCard"
					onEditClick={() => {
						props.edit();
					}}
				/>
			</Link>
			<DeleteButton
				className="deleteButton_workshopCard"
				onClickDelete={() => actions.deleteWorkshop(props.item, store.LoggedUser.id)}
			/>
		</div>
	);

	useEffect(() => {
		store.user != null
			? setEditAndDeleteButton("")
			: setEditAndDeleteButton(
					<div>
						<Link to={"/add_workshop/" + props.item.id}>
							<EditButton
								className="editButton_workshopCard"
								onEditClick={() => {
									props.edit();
								}}
							/>
						</Link>
						<DeleteButton
							className="deleteButton_workshopCard"
							onClickDelete={() => actions.deleteWorkshop(props.item, store.LoggedUser.id)}
						/>
					</div>
			  );
	}, [store.user]);

	let categoryLabels = props.item.categories.map((item, index) => {
		return <Categorylabel item={item} key={index.toString()} />;
	});

	return (
		<div className="workshopCard">
			<div className="cardInformation">
				<p className="workshopTitle">{props.item.title}</p>
				<div className="workshopDetails">
					<span className="date">Date: {props.item.date}</span>
					<span className="duration">Duration: {props.item.duration} hours</span>
					<span className="maxPeople">Pax: {props.item.max_people}</span>
					<span className="WorkDescription">Description: {props.item.description}</span>
					<span className="categories">{categoryLabels} </span>
				</div>
			</div>
			<div className="buttons_workshopCard">
				{editAndDeleteButton}
				<YellowButton className="yellowButton_workshopCard" text="Learn more" />
			</div>
		</div>
	);
};

WorkshopCard.propTypes = {
	item: PropTypes.object,
	edit: PropTypes.func,
	yellowButtonText: PropTypes.string
};
