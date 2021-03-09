import React, { Component } from "react";

import PropTypes from "prop-types";

import "../../styles/index.scss";

export const YellowButton = props => {
	return (
		<button className="yellowButton" onClick={props.onClickForm}>
			{props.text}
		</button>
	);
};

YellowButton.propTypes = {
	text: PropTypes.string,
	onClickForm: PropTypes.func
};
