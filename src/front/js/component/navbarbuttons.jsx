import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const NavbarButtons = props => {
	const { store, actions } = useContext(Context);
	return (
		<button className="navbarButtons" onClick={props.onClickNavbar}>
			{props.text}
		</button>
	);
};

NavbarButtons.propTypes = {
	text: PropTypes.string,
	onClickNavbar: PropTypes.func
};
