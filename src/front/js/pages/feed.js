import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import { Workshops } from "../component/FeedComponent/workshopsfeed.jsx";
import { Profilefeed } from "../component/FeedComponent/profilefeed.jsx";
import { Searchworkshops } from "../component/FeedComponent/searchworkshopsfeed.jsx";

export const Feed = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.decode();
	}, []);

	let listAllWorkshops = store.allWorkshops.map((item, index) => {
		return <Workshops item={item} key={index.toString()} />;
	});

	let listAllSearchWorkshops = store.allSearchWorkshops.map((item, index) => {
		return <Searchworkshops item={item} key={index.toString()} />;
	});

	if (!store.LoggedUser.is_psychologist) {
		return (
			<>
				<div className="container-fluid bodyFeed">
					<div className="row d-felx justify-content-center">
						<Profilefeed />
						<div className="col-lg-8 col-sm-12 px-0">{listAllWorkshops}</div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="container-fluid bodyFeed">
					<div className="row d-felx justify-content-center">
						<Profilefeed />
						<div className="col-lg-8 col-sm-12 px-0">{listAllSearchWorkshops}</div>
					</div>
				</div>
			</>
		);
	}
};
