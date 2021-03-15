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
			<div className="row">
				<WorkshopDetail />
			</div>
		</>
	);
};
