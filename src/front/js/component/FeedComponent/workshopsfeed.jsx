import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "../../../styles/index.scss";

import { YellowButton } from "../yellowButton.js";
import { Categorylabel } from "./categoryinworkshops.jsx";

export const Workshops = props => {
	const { store, actions } = useContext(Context);
	const [avatar, setAvatar] = useState("");

	const toUpperCase = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const cutDescription = str => {
		return str.substr(0, 125).concat(" ...");
	};

	useEffect(() => {
		if (props.item.user_psychologist_id == 1) {
			setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg");
		} else if (props.item.user_psychologist_id == 2) {
			setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg");
		} else {
			setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg");
		}
	}, []);

	let categoryLabels = props.item.categories.map((item, index) => {
		return <Categorylabel item={item} key={index.toString()} />;
	});

	return (
		<>
			<div className="templateWorkshop">
				<div className="ownerWorkshop">
					<img className="avatarWorkshop" src={avatar} />
					{toUpperCase(props.item.owner_name)} {toUpperCase(props.item.owner_lastname)} offers:
				</div>
				<div className="titleWorkshop">{props.item.title}</div>
				<div className="bodyWorkshop">
					<p>Date: {props.item.date}</p>
					<p>Duration: {props.item.duration}</p>
					<p>Maximum number of persons: {props.item.max_people}</p>
					<p>Price {props.item.price} €</p>
				</div>
				<div className="descriptionWorkshop">
					<p>{cutDescription(props.item.description)}</p>
				</div>
				<div className="row d-flex">
					<div className="col-lg-8 col-sm-12 d-flex flex-wrap">{categoryLabels}</div>
					<div className="col-lg-4 col-sm-12 d-flex justify-content-lg-end justify-content-center">
						<Link to="/workshopdetail">
							<YellowButton text="View More" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
Workshops.propTypes = {
	item: PropTypes.object
};
