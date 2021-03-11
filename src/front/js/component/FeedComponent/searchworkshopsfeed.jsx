import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";

import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";

import "../../../styles/index.scss";

import { YellowButton } from "../yellowButton.js";

export const Searchworkshops = props => {
	const { store, actions } = useContext(Context);
	const [avatar, setAvatar] = useState("");

	const toUpperCase = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	useEffect(() => {
		if (props.item.user_company_id == 1) {
			setAvatar("https://assets.breatheco.de/apis/img/icon/4geeks.png");
		} else if (props.item.user_company_id == 2) {
			setAvatar("https://talenthackers.s3.amazonaws.com/media/square-talenthackers.png");
		} else {
			setAvatar("https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg");
		}
	}, []);

	return (
		<>
			<div className="templateWorkshop">
				<div className="ownerSearchWorkshop">
					<img className="avatarSearchWorkshop" src={avatar} />
					{toUpperCase(props.item.owner)} is looking for:
				</div>
				<div className="bodySearchWorkshop">
					<p>Date: {props.item.date}</p>
					<p>Duration: {props.item.duration}</p>
					<p>Maximum number of persons: {props.item.max_people}</p>
					<p>Maximum price {props.item.max_price} €</p>
				</div>
				<div className="row d-flex justify-content-between mx-1">
					<p className="categoryLabelSearch">{props.item.category}</p>
					<Link to={"/profile/" + props.item.owner.replace(" ", "_")}>
						<YellowButton
							onClickForm={() => {
								actions.getUser(props.item.user_id);
								actions.getSearchWorkshops(props.item.user_company_id);
							}}
							text="Contact"
						/>
					</Link>
				</div>
			</div>
		</>
	);
};
Searchworkshops.propTypes = {
	item: PropTypes.object
};
