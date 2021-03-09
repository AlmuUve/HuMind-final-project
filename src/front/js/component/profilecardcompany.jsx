import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useHistory } from "react-router-dom";
import { YellowButton } from "./yellowButton.js";
import "../../styles/index.scss";

export const Profiletemplatecompany = props => {
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(false);

	const history = useHistory();

	return (
		<>
			<div className="imgProfile">
				<img
					className="avatar"
					src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
				/>
			</div>
			<div className="bodyCard">
				<div className="titleCard">{store.user.company_name}</div>
				<div className="descriptionCard">
					<p>{store.user.company_number}</p>
					<p>{store.user.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={store.user.email} />
				</div>
				<Link to="edit_profile">
					<YellowButton
						text="Edit Profile"
						onClickForm={() => {
							setEdit(!edit);
							history.push("/edit_profile");
						}}></YellowButton>
				</Link>
			</div>
		</>
	);
};
