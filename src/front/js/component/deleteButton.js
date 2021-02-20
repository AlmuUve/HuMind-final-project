import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const DeleteButton = props => {
	const { actions, store } = useContext(Context);

	return (
		<button
			className="delete_profileButton"
			onClick={() => {
				actions.deleteProfile();
			}}>
			<i className="fas fa-trash-alt" />
		</button>
	);
};
