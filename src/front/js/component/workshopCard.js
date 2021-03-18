import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { YellowButton } from "./yellowButton";
import { DeleteButton } from "./deleteButton";
import { EditButton } from "./editButton";
import { Link } from "react-router-dom";
import { Categorylabel } from "./FeedComponent/categoryinworkshops.jsx";
import { Modaldelete } from "./modaldelete.jsx";

export const WorkshopCard = props => {
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

	let categoryLabels = props.item.categories.map((item, index) => {
		return <Categorylabel item={item} key={index.toString()} />;
	});

	return (
		<div className="templateWorkshop">
			<div className="row fatherButton">
				<div className="col-6 titleWorkshop">{props.item.title}</div>
				{editAndDeleteButton}
			</div>
			<div className="bodyWorkshop">
				<p>Date: {props.item.date}</p>
				<p>Duration: {props.item.duration} hours</p>
				<p>Pax: {props.item.max_people}</p>
				<p>Price {props.item.price} €</p>
				<p>Description: {props.item.description}</p>
			</div>
			<div className="row d-flex mt-2">
				<div className="col-lg-8 col-sm-12 d-flex flex-wrap">{categoryLabels}</div>
				<div className="col-lg-4 col-sm-12 d-flex justify-content-lg-end justify-content-center">
					<Link to="/workshopdetail">
						<YellowButton text="View More" />
					</Link>
				</div>
			</div>
			<Modaldelete
				show={state.showModal}
				text={"I would like to delete my " + props.item.title + " workshop"}
				titleModal="Are you sure?"
				confirmation="DO IT!"
				getMeBack="GO BACK"
				classNameEmail="ButtonBlue"
				classNameBack="ButtonBlueModal"
				onClickDelete={() => {
					setState({ showModal: false });
					actions.deleteWorkshop(props.item, store.LoggedUser.id);
				}}
				onClosed={() => setState({ showModal: false })}
			/>
		</div>
	);
};

WorkshopCard.propTypes = {
	item: PropTypes.object,
	edit: PropTypes.func,
	yellowButtonText: PropTypes.string
};
