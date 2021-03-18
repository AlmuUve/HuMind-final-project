import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BlueButton } from "../component/blueButton.jsx";
import { useHistory } from "react-router-dom";

import "../../img/404.png";
import "../../styles/index.scss";

export const View404 = () => {
	const { actions, store } = useContext(Context);
	const history = useHistory();

	return (
		<>
			<content className="container-fluid">
				<div className="row">
					<div className="col-12 page404"></div>
					<div className="col-12 d-flex justify-content-center backButton">
						<BlueButton
							className="ButtonBlueModal"
							text="GO BACK"
							onClickBlue={() => {
								actions.logout();
								history.push("/");
							}}
						/>
					</div>
				</div>
			</content>
		</>
	);
};
