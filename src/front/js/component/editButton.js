import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditButton = props => {
	const { store, actions } = useContext(Context);

	return (
		<button className={props.className} onClick={props.onEditClick}>
			<i className="far fa-edit" />
		</button>
	);
};

EditButton.propTypes = {
	onEditClick: PropTypes.func,
	className: PropTypes.string
};
