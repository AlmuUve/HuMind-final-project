import React from "react";

import PropTypes from "prop-types";

export const NavbarButtons = props => <button className="navbarButtons">{props.text}</button>;

NavbarButtons.propTypes = {
	text: PropTypes.string
};
