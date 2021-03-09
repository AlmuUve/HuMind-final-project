import React, { useContext, useEffect, useReducer, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Profiletemplatepsy } from "../component/profilecardpsychologist.jsx";
import { Profiletemplatecompany } from "../component/profilecardcompany.jsx";
import { Coverphoto } from "../component/coverphoto.jsx";
import { YellowButton } from "../component/yellowButton";
import { WorkshopCard } from "../component/workshopCard";
import { SearchWorkshopCard } from "../component/searchworkshopcard";
import { Email } from "../component/email.jsx";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	let userWorkshops = store.workshops.map((item, index) => {
		return <WorkshopCard item={item} key={index.toString()} edit={() => (store.currentWorkshop = item)} />;
	});

	let listSearchWorkshops = store.searchWorkshops.map((item, index) => {
		return <SearchWorkshopCard item={item} key={index.toString()} edit={() => (store.currentSearch = item)} />;
	});

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
								<Link to={"/add_workshop/" + store.user.name + "_" + store.user.lastname}>
									<YellowButton text="Add Workshop" />
								</Link>
								{userWorkshops}
								<Email />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	} else {
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
								<Link to={"/add_search_workshop/" + store.company_name}>
									<YellowButton text="Add Search" />
								</Link>
								{listSearchWorkshops}
								<Email />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
};
