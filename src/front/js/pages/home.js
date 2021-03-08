import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { WorkshopCard } from "../component/workshopCard";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let userWorkshops = store.workshops.map((item, index) => {
		return <WorkshopCard item={item} key={index.toString()} />;
	});

	return <div>{userWorkshops}</div>;
};
