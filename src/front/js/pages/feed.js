import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import { Workshops } from "../component/workshoptemplate.jsx";
import { Profilecompanyfeed } from "../component/profileinfeedcompany.jsx";

export const Feed = () => {
	const { store, actions } = useContext(Context);

	let listAllWorkshops = store.allWorkshops.map((item, index) => {
		return <Workshops item={item} key={index.toString()} />;
	});

	return (
		<>
			<div className="container-fluid">
				<div className="row d-felx justify-content-center">
					<Profilecompanyfeed />
					<div className="col-lg-8 col-sm-12 bg-succes">{listAllWorkshops}</div>
				</div>
			</div>
		</>
	);
};
