import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";

import { Link } from "react-router-dom";

import "../../../styles/index.scss";
import { YellowButton } from "../yellowButton";

export const Profilefeed = props => {
	const { store, actions } = useContext(Context);
	const [avatar, setAvatar] = useState("");
	const [name, setName] = useState("");

	const toUpperCase = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	useEffect(() => {
		if (store.user.is_psychologist) {
			setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg");
			setName(toUpperCase(store.user.name) + " " + toUpperCase(store.user.lastname));
		} else {
			setAvatar("https://assets.breatheco.de/apis/img/icon/4geeks.png");
			setName(store.user.company_name);
		}
	}, [store.user]);

	return (
		<div className="col-lg-3 col-sm-12 profileFeed">
			<div className="imgProfileFeed">
				<img className="avatar" src={avatar} />
			</div>
			<div className="bodyCardFeed">
				<div className="titleCardFeed">{name}</div>
			</div>
			<div className="d-flex justify-content-center mt-2">
				<Link to="/profile">
					<YellowButton text="Go to profile" />
				</Link>
			</div>
		</div>
	);
};

Profilefeed.propTypes = {
	// item: PropTypes.string
};