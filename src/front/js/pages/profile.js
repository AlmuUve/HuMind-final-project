import React, { useContext, useEffect, useReducer, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Profiletemplatepsy } from "../component/profilecardpsychologist.jsx";
import { Profiletemplatecompany } from "../component/profilecardcompany.jsx";
import { Coverphoto } from "../component/coverphoto.jsx";
import { YellowButton } from "../component/yellowButton";
import { WorkshopCard } from "../component/workshopCard";
import { Email } from "../component/email.jsx";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	let userWorkshops = store.workshops.map((item, index) => {
		return <WorkshopCard item={item} key={index.toString()} />;
	});

	if (store.help) {
		return (
			<>
				<div className="container-fluid">
					<Coverphoto photo="coverPhotoPsy" />
				</div>
				<div className="container">
					<div className="row">
						<Profiletemplatepsy />
						<Link to="/add_workshop">
							<YellowButton text="Add Workshop" />
						</Link>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="container-fluid">
					<Coverphoto photo="coverPhotoCompany" />
				</div>
				<div className="container-fluid">
					<div className="row">
						<Profiletemplatecompany />
						<Link to="/add_search_workshop">
							<YellowButton text="Add Search" />
						</Link>
						<div>{userWorkshops}</div>
						<Email />
					</div>
				</div>
			</>
		);
	}
};
