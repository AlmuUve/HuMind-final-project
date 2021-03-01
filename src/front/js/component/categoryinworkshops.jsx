import React, { Component } from "react";

import PropTypes from "prop-types";

import "../../styles/index.scss";

export const Categorylabel = props => <span className="categoryLabel"> {props.item}</span>;

Categorylabel.propTypes = {
	item: PropTypes.string
};
