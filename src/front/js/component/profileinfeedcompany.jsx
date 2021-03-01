import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import "../../styles/index.scss";

export const Profilecompanyfeed = props => {
	const { store, actions } = useContext(Context);

	console.log("hola", store.user.company_name);

	return (
		<div className="col-lg-3 col-sm-12 profileFeed">
			<div className="imgProfileFeed">
				<img className="avatar" src="https://assets.breatheco.de/apis/img/icon/4geeks.png" />
			</div>
			<div className="bodyCardFeed">
				<div className="titleCardFeed">{store.user.company_name}</div>
			</div>
		</div>
	);
};

Profilecompanyfeed.propTypes = {
	// item: PropTypes.string
};
