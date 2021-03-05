import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { WorkshopCard } from "../component/workshopCard";

import "../../styles/home.scss";
import { WorkshopDetail } from "../component/workshopdetail";

export const Home = () => {
	// const { store, actions } = useContext(Context);

	return <WorkshopDetail />;
	// console.log(store.workshops, "soy el console log de home");

	// let userWorkshops = store.workshops.map((item, index) => {
	// 	return <WorkshopCard item={item} key={index.toString()} />;
	// });

	// return <div>{userWorkshops}</div>;
};
