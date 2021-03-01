import React from "react";

import PropTypes from "prop-types";

export const SignUpLogInButton = props => <button className="signUpLogInButton">{props.text}</button>;

SignUpLogInButton.propTypes = {
	text: PropTypes.string
};
