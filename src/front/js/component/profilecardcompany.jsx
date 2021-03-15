import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useHistory } from "react-router-dom";
import { YellowButton } from "./yellowButton.js";
import { DeleteButton } from "./deleteButton";
import "../../styles/index.scss";
import { useEffect } from "react";
import { Modaldelete } from "./modaldelete.jsx";

export const Profiletemplatecompany = props => {
	const { store, actions } = useContext(Context);
	const [avatar, setAvatar] = useState("");
	const [editButton, seteditButton] = useState();
	const [state, setState] = useState({
		showModal: false
	});

	useEffect(() => {
		store.user != null
			? seteditButton("")
			: seteditButton(
					<div>
						<Link to="/edit_profile">
							<YellowButton text="Edit Profile"></YellowButton>
						</Link>
					</div>
			  );
	}, [store.user]);

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
		} else {
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
	}, [store.user]);

	return (
		<>
			<div className="imgProfile">
				<img className="avatar" src={avatar} />
			</div>
			<div className="bodyCard">
				<div className="titleCard">
					{store.user ? store.user.name + " " + store.user.lastname : store.LoggedUser.company_name}
				</div>
				<div className="descriptionCard">
					<p>{store.user ? store.user.speciality : store.LoggedUser.company_number}</p>
					<p className="lastChildDescription">
						{store.user ? store.user.association_number : store.LoggedUser.description}
					</p>
					<p className="lastChildDescription">{store.user ? store.user.description : ""}</p>
				</div>
				{editButton}
			</div>
		</>
	);
};
