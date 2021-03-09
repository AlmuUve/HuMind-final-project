import React, { Component } from "react";
import PropTypes from "prop-types";

export const Categorylabel = props => <span className="categoryLabel mb-lg-0 mb-3"> {props.item}</span>;

Categorylabel.propTypes = {
	item: PropTypes.string
};
