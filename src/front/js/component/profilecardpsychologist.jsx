import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { YellowButton } from "./yellowButton.js";
import { DeleteButton } from "./deleteButton";
import "../../styles/index.scss";
import { useEffect } from "react";

export const Profiletemplatepsy = props => {
	const { store, actions } = useContext(Context);
	const [editButton, seteditButton] = useState(
		<Link to="/edit_profile">
			<YellowButton text="Edit Profile"></YellowButton>
		</Link>
	);

	useEffect(() => {
		store.user != null
			? seteditButton("")
			: seteditButton(
					<div>
						<Link to="/edit_profile">
							<YellowButton text="Edit Profile"></YellowButton>
						</Link>
						<DeleteButton
							onClickDelete={() => actions.deleteProfile(store.LoggedUser.user_id)}
							className="deleteProfile"
						/>
					</div>
			  );
	}, [store.user]);

	return (
		<>
			<div className="imgProfile">
				<img
					className="avatar"
					src={
						store.user
							? "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
							: "https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
					}
				/>
			</div>
			<div className="bodyCard">
				<div className="titleCard">
					{store.user ? store.user.company_name : store.LoggedUser.name}{" "}
					{store.user ? "" : store.LoggedUser.lastname}
				</div>
				<div className="descriptionCard">
					<p>{store.user ? "" : store.LoggedUser.speciality}</p>
					<p>{store.user ? store.user.company_number : store.LoggedUser.association_number}</p>
					<p className="lastChildDescription">
						{store.user ? store.user.description : store.LoggedUser.description}
					</p>
				</div>
				{editButton}
			</div>
		</>
	);
};
