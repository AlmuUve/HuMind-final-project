import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { WorkshopCard } from "../component/workshopCard";

import "../../styles/home.scss";
import { WorkshopDetail } from "../component/workshopdetail";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return <WorkshopDetail />;
};
