import React, { useEffect } from "react";
import { WorkshopDetail } from "../component/workshopdetail";
import { Navbarpage } from "../component/navbar.jsx";

import "../../styles/home.scss";

export const ViewWorkshopDetail = () => {
	return (
		<>
			<div className="row">
				<Navbarpage />
			</div>
            <div className="imgProfile">
				<img
					className="avatar"
					src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
				/>
			</div>
			<div className="bodyCard">
				<div className="titleCard">{store.user.company_name}</div>
				<div className="descriptionCard">
					<p>{store.user.company_number}</p>
					<p>{store.user.description}</p>
				</div>
				<div className="bottomCard">
					<i className="fas fa-envelope fa-2x" href={store.user.email} />
				</div>
            </div>
			<div className="row">
				<WorkshopDetail />
			</div>
		</>
	);
};