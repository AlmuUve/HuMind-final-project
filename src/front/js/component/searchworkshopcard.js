import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton.js";
import { EditButton } from "./editButton.js";
import { DeleteButton } from "./deleteButton.js";
import { Modaldelete } from "./modaldelete.jsx";

export const SearchWorkshopCard = props => {
	const { actions, store } = useContext(Context);
	const [editAndDeleteButton, setEditAndDeleteButton] = useState();
	const [state, setState] = useState({
		showModal: false
	});

	useEffect(() => {
		store.user != null
			? setEditAndDeleteButton("")
			: setEditAndDeleteButton(
					<div className="col-6 d-flex align-items-top">
						<Link to={"/add_workshop/" + props.item.id}>
							<EditButton
								className="editButton"
								onEditClick={() => {
									props.edit();
								}}
							/>
						</Link>
						<DeleteButton className="deleteButton" onClickDelete={() => setState({ showModal: true })} />
					</div>
			  );
	}, [store.user]);

	return (
		<>
			<div className="templateWorkshop">
				<div className="row fatherButton">
					<div className="col-6 titleWorkshop">{props.item.title}</div>
					{editAndDeleteButton}
				</div>
				<div className="bodySearchWorkshop">
					<p>Date: {props.item.date}</p>
					<p>Duration: {props.item.duration} Hours</p>
					<p>Maximum number of persons: {props.item.max_people}</p>
					<p>Maximum price: {props.item.max_price} €</p>
				</div>
				<div className="row d-flex justify-content-between mx-1">
					<p className="categoryLabelSearch">{props.item.category}</p>
				</div>
			</div>
			<Modaldelete
				show={state.showModal}
				text={"I would like to delete my " + props.item.title + " search"}
				titleModal="Are you sure?"
				confirmation="DO IT!"
				getMeBack="GO BACK"
				classNameEmail="ButtonBlue"
				classNameBack="ButtonBlueModal"
				onClickDelete={() => {
					setState({ showModal: false });
					actions.deleteSearchWorkshop(props.item, store.LoggedUser.id);
				}}
				onClosed={() => setState({ showModal: false })}
			/>
		</>
	);
};

SearchWorkshopCard.propTypes = {
	item: PropTypes.object,
	edit: PropTypes.func
};
