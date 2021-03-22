import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton";
import { Categorylabel } from "./categorylabel";
import { Profilefeed } from "../component/FeedComponent/profilefeed.jsx";

import "../../styles/index.scss";

export const WorkshopDetail = () => {
	const { actions, store } = useContext(Context);
	const [avatar, setAvatar] = useState("");
	const history = useHistory();

	let workshopDetailCategory =
		store.categories.length != 0
			? store.categories.map((item, index) => {
					return <Categorylabel item={item} key={index.toString()} />;
			  })
			: "loading";

	useEffect(() => {
		if (store.user) {
			if (store.user.id == 1) {
				setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg");
			} else if (store.user.id == 2) {
				setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg");
			} else if (store.user.id == 3) {
				setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg");
			} else {
				setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg");
			}
		}
	}, [store.user]);

	return (
		<div className="container-fluid workshopDetail row">
			<Profilefeed />
			<div className="workshopDetailCard col-lg-7 col-sm-12">
				<Link to={"/feed"}>
					<i className="fas fa-times crossButton" />
				</Link>
				<div className="ownerWorkshop d-flex flex-direction-wrap align-items-center">
					<img className="avatarWorkshop" src={avatar} />
					{store.workshop.owner_name} {store.workshop.owner_lastname} {store.workshop.title}
				</div>
				<div className="workshopDetailDetails">
					<div className="bodyWorkshop">
						<p>Date: {store.workshop.date}</p>
						<p>Duration: {store.workshop.duration}</p>
						<p>Pax: {store.workshop.max_people}</p>
						<p>Description: {store.workshop.description}</p>
					</div>
					<p className="detailCategory">{workshopDetailCategory}</p>
					<iframe
						width="560"
						height="315"
						className="youTubeVideo"
						src="https://www.youtube.com/embed/F-W3SFUUq4o"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
					<div className="d-flex justify-content-center pt-5">
						<YellowButton
							text="Contact"
							onClickForm={() => {
								actions.setSubjectEmail(store.workshop.title);
								actions.getWorkshops(store.user.id);
								history.push("/profile/" + store.user.name);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

WorkshopDetail.propTypes = {
	yellowButtonText: PropTypes.string
};
