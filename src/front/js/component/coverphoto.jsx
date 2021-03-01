import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export const Coverphoto = props => {
	return <div className={"12-col " + props.photo} />;
};
Coverphoto.propTypes = {
	photo: PropTypes.string
};
