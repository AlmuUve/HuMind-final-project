import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditButton = () => {
	const { store, actions } = useContext(Context);

	return (
		<button className="editButton" onClick={props.onEditClick}>
			<i className="far fa-edit editButton" />
		</button>
	);
};

EditButton.propTypes = {
	onEditClick: PropTypes.func
};
