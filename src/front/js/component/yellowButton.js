import React, { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

import PropTypes from "prop-types";

import "../../styles/index.scss";

export const YellowButton = props => <button className="yellowButton"> {props.text}</button>;

YellowButton.propTypes = {
	text: PropTypes.string
};
