import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

export const DeleteButton = props => {
	const { actions, store } = useContext(Context);

	return (
		<button className={props.className} onClick={props.onClickDelete}>
			<i className="far fa-trash-alt" />
		</button>
	);
};

DeleteButton.propTypes = {
	onClickDelete: PropTypes.func,
	className: PropTypes.string
};
