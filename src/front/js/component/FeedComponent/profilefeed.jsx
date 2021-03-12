import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";

import { Link } from "react-router-dom";

import "../../../styles/index.scss";
import { YellowButton } from "../yellowButton";

export const Profilefeed = () => {
	const { store, actions } = useContext(Context);
	const [avatar, setAvatar] = useState("");
	const [name, setName] = useState("");

	const toUpperCase = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	useEffect(() => {
		store.LoggedUser.is_psychologist
			? setName(toUpperCase(store.LoggedUser.name) + " " + toUpperCase(store.LoggedUser.lastname))
			: setName(toUpperCase(store.LoggedUser.company_name));
	}, [store.LoggedUser]);

	useEffect(() => {
		if (store.LoggedUser.is_psychologist) {
			if (store.LoggedUser.id == 1) {
				setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg");
			} else if (store.LoggedUser.id == 2) {
				setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg");
			} else if (store.LoggedUser.id == 3) {
				setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg");
			} else {
				setAvatar("https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg");
			}
		}
	}, [store.LoggedUser]);

	useEffect(() => {
		if (store.LoggedUser.is_psychologist == false) {
			if (store.LoggedUser.id == 1) {
				setAvatar("https://assets.breatheco.de/apis/img/icon/4geeks.png");
			} else if (store.LoggedUser.id == 2) {
				setAvatar("https://talenthackers.s3.amazonaws.com/media/square-talenthackers.png");
			} else if (store.LoggedUser.id == 3) {
				setAvatar(
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWSMfzARBIUA3oobW0k9WNZW6ifFck41q0OaWBFMwhh59AZg5niIQzkrwc56_6oVLFSE&usqp=CAU"
				);
			} else {
				setAvatar("https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg");
			}
		}
	}, [store.LoggedUser]);

	return (
		<div className="col-lg-3 col-sm-12 profileFeed">
			<div className="imgProfileFeed">
				<img className="avatar" src={avatar} />
			</div>
			<div className="bodyCardFeed">
				<div className="titleCardFeed">{name}</div>
			</div>
			<div className="d-flex justify-content-center mt-2">
				<Link
					to={
						store.LoggedUser.is_psychologist
							? "/profile/" + store.LoggedUser.name + "_" + store.LoggedUser.lastname
							: "/profile/" + store.LoggedUser.company_name
					}>
					<YellowButton text="Go to profile" onClickForm={() => actions.setUser(null)} />
				</Link>
			</div>
		</div>
	);
};
