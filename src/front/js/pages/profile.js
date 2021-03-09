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

	// let userWorkshops = store.workshops.map((item, index) => {
	// 	return <WorkshopCard item={item} key={index.toString()} />;
	// });

	let listSearchWorkshops = store.allSearchWorkshops.map((item, index) => {
		return <SearchWorkshopCard item={item} key={index.toString()} />;
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
								{/* <Link to="/add_workshop">
									<YellowButton text="Add Workshop" />
								</Link>
								<div>{userWorkshops}</div> */}
								<Email />
							</div>
						</div>
					</div>
				</div>
<<<<<<< HEAD
				<div className="container">
					<div className="row">
						<Profiletemplatepsy />
						<Link to="/add_workshop">
							<YellowButton text="Add Workshop" />
						</Link>
						<div>{userWorkshops}</div>
						<Email />
=======
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
								{/* <Link to="/add_search_workshop">
									<YellowButton text="Add Search" />
								</Link> */}
								{/* <div>{userWorkshops}</div> */}
								<Email />
							</div>
						</div>
>>>>>>> main
					</div>
				</div>
			</>
		);
	}
<<<<<<< HEAD

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
					<div>{listSearchWorkshops}</div>
					<div>{userWorkshops}</div>
					<Email />
				</div>
			</div>
		</>
	);
=======
>>>>>>> main
};
