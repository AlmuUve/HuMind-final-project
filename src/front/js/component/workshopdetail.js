import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton";
import { Categorylabel } from "./categorylabel";

export const WorkshopDetail = () => {
    const { actions, store } = useContext(Context);
    
	let workshopDetailCategory =
		store.categories.length != 0
			? store.categories.map((item, index) => {
					return <Categorylabel item={item} key={index.toString()} />;
			  })
			: "loading";

	return (
		<div className="container-fluid workshopDetail row">
			<div className="profile_workshopDetail col-md-4 col-xs-0">
				<div className="imgProfile_workshop_detail">
					<img className="avatar" src="https://assets.breatheco.de/apis/img/icon/4geeks.png" />
				</div>
				<div className="titleCard">{store.LoggedUser.company_name}</div>
			</div>
			<div className="workshopDetailCard col-md-7 col-xs-12">
				<Link to={"/"}>
					<i className="fas fa-times crossButton" />
				</Link>
				<p className="workshopTitle">
					{store.workshop.name} {store.workshop.lastname} {store.workshop.title}
				</p>
				<div className="workshopDetailDetails">
					<span className="categories">
						Category:
						{workshopDetailCategory}
					</span>
					<span className="date">Date: {store.workshop.date}</span>
					<span className="duration">Duration: {store.workshop.duration}</span>
					<span className="maxPeople">Pax: {store.workshop.max_people}</span>
					<span className="description">Description: {store.workshop.description}</span>
					<iframe className="video" width="420" height="315" src="https://youtu.be/N6pji9kEO10"></iframe>
					<YellowButton className="workshopDetail_contactButton" text="Contact" />
				</div>
			</div>
		</div>
	);
};

WorkshopDetail.propTypes = {
	// item: PropTypes.object,
	yellowButtonText: PropTypes.string
};
