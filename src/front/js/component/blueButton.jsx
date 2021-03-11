import React, { Component } from "react";

import PropTypes from "prop-types";

import "../../styles/index.scss";

export const BlueButton = props => {
	return (
		<button className={props.className} onClick={props.onClickBlue}>
			{props.text}
		</button>
	);
};

BlueButton.propTypes = {
	text: PropTypes.string,
	onClickBlue: PropTypes.func,
	className: PropTypes.string
};
