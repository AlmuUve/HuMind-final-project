import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton.js";
import { EditButton } from "./editButton.js";
import { DeleteButton } from "./deleteButton.js";

export const SearchWorkshopCard = props => {
	const { actions, store } = useContext(Context);
	const [editAndDeleteButton, setEditAndDeleteButton] = useState(
		<div className="col-6 d-flex align-items-top">
			<Link to={"/add_workshop/" + props.item.id}>
				<EditButton
					className="editButton_workshopCard"
					onEditClick={() => {
						props.edit();
					}}
				/>
			</Link>
			<DeleteButton
				className="deleteButton"
				onClickDelete={() => actions.deleteSearchWorkshop(props.item, store.LoggedUser.id)}
			/>
		</div>
	);
	useEffect(() => {
		store.user != null
			? setEditAndDeleteButton("")
			: setEditAndDeleteButton(
					<div className="col-6 d-flex align-items-top">
						<Link to={"/add_workshop/" + props.item.id}>
							<EditButton
								onEditClick={() => {
									props.edit();
								}}
							/>
						</Link>
						<DeleteButton
							onClickDelete={() => actions.deleteSearchWorkshop(props.item, store.LoggedUser.id)}
						/>
					</div>
			  );
	}, [store.user]);

	return (
		<>
			<div className="templateWorkshop">
				<div className="row fatherButton">
					<div className="col-6 titleWorkshop">ESTO SERA EL TITULO</div>
					{editAndDeleteButton}
				</div>
				<div className="bodySearchWorkshop">
					<p>Date: {props.item.date}</p>
					<p>Duration: {props.item.duration}</p>
					<p>Maximum number of persons: {props.item.max_people}</p>
					<p>Maximum price {props.item.max_price} €</p>
				</div>
				<div className="row d-flex justify-content-between mx-1">
					<p className="categoryLabelSearch">{props.item.category}</p>
				</div>
			</div>
		</>
	);
};

SearchWorkshopCard.propTypes = {
	item: PropTypes.object,
	edit: PropTypes.func
};
