import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CompanyRegistrationForm } from "../component/companyRegistrationForm";
import "../../styles/index.scss";
import { YellowButton } from "./yellowButton.js";

export const Profiletemplatecompany = props => {
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(false);
	// if (!edit) {
	return (
		<div className="col-lg-4 col-sm-12 profileCard">
			<div className="imgProfile">
				<img className="avatar" src="https://assets.breatheco.de/apis/img/icon/4geeks.png" />
			</div>
			<div className="bodyCard">
				<div className="titleCard">{store.user.company_name}</div>
				<div className="descriptionCard">
					<p>{store.user.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={store.user.email} />
				</div>
				<Link to="edit_profile">
					<YellowButton
						text="Edit Profile"
						onClickForm={() => {
							//setEdit(!edit);
						}}></YellowButton>
				</Link>
			</div>
		</div>
	);
	// } else {
	// 	return <CompanyRegistrationForm />;
	// }
};
