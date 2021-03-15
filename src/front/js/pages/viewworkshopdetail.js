import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { WorkshopDetail } from "../component/workshopdetail";
import { Navbarpage } from "../component/navbar.jsx";
// import { Profilefeed } from "../component/FeedComponent/profilefeed.jsx";

import "../../styles/home.scss";

export const ViewWorkshopDetail = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{/* <div className="imgProfile">
				<img
					className="avatar"
					src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
				/>
			</div>
			<div className="bodyCard">
				<div className="titleCard">{store.LoggedUser.company_name}</div>
				<div className="descriptionCard">
					<p>{store.LoggedUser.company_number}</p>
					<p>{store.LoggedUser.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={store.LoggedUser.email} />
				</div>
			</div> */}
			<div className="row">
				<WorkshopDetail />
			</div>
		</>
	);
};
