import React from "react";
import { WorkshopDetail } from "../component/workshopdetail";
import "../../styles/home.scss";

export const ViewWorkshopDetail = () => {
	return (
		<>
			<div className="row">
				<div className="col-lg-12 col-sm-12">
					<WorkshopDetail />
				</div>
			</div>
		</>
	);
};
