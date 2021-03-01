import React, { Component } from "react";

import PropTypes from "prop-types";

import "../../styles/index.scss";

export const YellowButton = props => (
	<button
		className="yellowButton"
<<<<<<< HEAD
		onClick={e => {
			props.onClickAddWorkshop(e);
		}}>
=======
		// onClick={e => {
		// 	props.onClickAddWorkshop(e);
		// 	props.AddSearchWorkshop(e);
		// }}
	>
>>>>>>> main
		{props.text}
	</button>
);

YellowButton.propTypes = {
	text: PropTypes.string,
<<<<<<< HEAD
	onClickAddWorkshop: PropTypes.func
=======
	onClickAddWorkshop: PropTypes.func,
	AddSearchWorkshop: PropTypes.func
>>>>>>> main
};
