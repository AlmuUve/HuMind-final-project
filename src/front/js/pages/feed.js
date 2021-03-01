import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

import { Workshops } from "../component/workshoptemplate.jsx";

export const Feed = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllWorkshops();
	}, []);

	let listAllWorkshops = store.allWorkshops.map((item, index) => {
		return <Workshops item={item} key={index.toString()} />;
	});

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-3 bg-danger"> Aqui va el perfil del user logeado.</div>
					<div className="col-lg-7 col-sm-12 bg-succes">{listAllWorkshops}</div>
				</div>
			</div>
		</>
	);
};
