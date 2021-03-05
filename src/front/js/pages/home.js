import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { SearchWorkshopCard } from "../component/searchworkshopcard";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let listSearchWorkshops = store.searchWorkshops.map((item, index) => {
		return <SearchWorkshopCard item={item} key={index.toString()} />;
	});

	return <div>{listSearchWorkshops}</div>;
};
