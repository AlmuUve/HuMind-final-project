import React, { Component, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton";
import { Categorylabel } from "./categorylabel";
import { Profilefeed } from "../component/FeedComponent/profilefeed.jsx";

export const WorkshopDetail = () => {
	const { actions, store } = useContext(Context);
	const history = useHistory();

	let workshopDetailCategory =
		store.categories.length != 0
			? store.categories.map((item, index) => {
					return <Categorylabel item={item} key={index.toString()} />;
			  })
			: "loading";

	return (
		<div className="container-fluid workshopDetail row">
			<Profilefeed />
			<div className="workshopDetailCard col-md-7 col-xs-12">
				<Link to={"/"}>
					<i className="fas fa-times crossButton" />
				</Link>
				<p className="workshopTitle">
					{store.workshop.owner_name} {store.workshop.owner_lastname} {store.workshop.title}
				</p>
				<div className="workshopDetailDetails">
					<p>{workshopDetailCategory}</p>
					<div className="bodyWorkshop">
						<p>Date: {store.workshop.date}</p>
						<p>Duration: {store.workshop.duration}</p>
						<p>Pax: {store.workshop.max_people}</p>
						<p>Description: {store.workshop.description}</p>
						<iframe width="420" height="315" src="https://youtu.be/N6pji9kEO10"></iframe>
					</div>
					<YellowButton
						text="Contact"
						onClickForm={() => {
							actions.setSubjectEmail(store.workshop.title);
							history.push("/profile/" + store.user.name);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

WorkshopDetail.propTypes = {
	yellowButtonText: PropTypes.string
};
