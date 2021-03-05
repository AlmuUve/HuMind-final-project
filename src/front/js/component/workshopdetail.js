import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton";

export const WorkshopDetail = props => {
	const { actions, store } = useContext(Context);

	return (
		<div className="container-fluid workshopDetail row">
			<div className="profile_workshopDetail col-md-4 col-xs-0">
				<div className="imgProfile_workshop_detail">
					<img className="avatar" src="https://assets.breatheco.de/apis/img/icon/4geeks.png" />
				</div>
				<div className="titleCard">{store.user.company_name}</div>
			</div>
			<div className="workshopDetailCard col-md-7 col-xs-12">
				<Link to={"/"}>
					<i className="fas fa-times crossButton" />
				</Link>
				<p className="workshopTitle">
					TITLE AND PSYCHOLOGIST NAME
					{/* {props.item.name} {props.item.lastname} {props.item.title} */}
				</p>
				<div className="workshopDetailDetails">
					<span className="categories">
						Category:
						{/* {props.item.category_info} */}
					</span>
					<span className="date">
						Date:
						{/* {props.item.date} */}
					</span>
					<span className="duration">
						Duration:
						{/* {props.item.duration}  */}
						hours
					</span>
					<span className="maxPeople">
						Pax:
						{/* {props.item.max_people} */}
					</span>
					<span className="description">
						Description:
						{/* {props.item.description} */}
					</span>
					<iframe className="video" width="420" height="315" src="https://youtu.be/N6pji9kEO10"></iframe>
					<YellowButton className="workshopDetail_contactButton" text="Contact" />
				</div>
			</div>
		</div>
	);
};

WorkshopDetail.propTypes = {
	item: PropTypes.object,
	yellowButtonText: PropTypes.string
};
