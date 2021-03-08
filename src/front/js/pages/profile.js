import React, { useContext, useEffect, useReducer, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Profiletemplatepsy } from "../component/profilecardpsychologist.jsx";
import { Profiletemplatecompany } from "../component/profilecardcompany.jsx";
import { Coverphoto } from "../component/coverphoto.jsx";
import { YellowButton } from "../component/yellowButton";
import { Email } from "../component/email.jsx";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	if (store.help) {
		return (
			<>
				<div className="container-fluid">
					<Coverphoto photo="coverPhotoCompany" />
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-4 col-sm-12 profileCard">
								<Profiletemplatepsy />
							</div>
							<div className="col-lg-8 col-sm-12">
								<Link to="/add_workshop">
									<YellowButton text="Add Workshop" />
								</Link>
								<Email />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="container-fluid">
				<Coverphoto photo="coverPhotoCompany" />
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-4 col-sm-12 profileCard">
							<Profiletemplatecompany />
						</div>
						<div className="col-lg-8 col-sm-12">
							<Link to="/add_search_workshop">
								<YellowButton text="Add Search" />
							</Link>
							<Email />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};