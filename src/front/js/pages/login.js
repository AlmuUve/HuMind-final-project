import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export const UserLogIn = props => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const profilePath = "/people/" + store.user.name;

	return (
		<div className="logIn_body d-flex justify-content-center ">
			<div className="logIn_leftColumn col-md-5 col-sm-12">
				<Link to={"/"}>
					<i className="fas fa-times" />
				</Link>
				<h2>Log In</h2>
				<h3>Use your HuMind account</h3>
				<form className="logIn_form">
					<label className="logIn_label_email">Email address:</label>
					<input
						className="logIn_input"
						type="text"
						id="fname"
						name="email"
						placeholder="Write your email here"
						onChange={e => {
							setEmail(e.target.value);
						}}
					/>
					<label className="logIn_label_password">Password:</label>
					<input
						className="logIn_input"
						type="password"
						id="fname"
						name="password"
						placeholder="Write your password here"
						onChange={e => {
							setPassword(e.target.value);
						}}
					/>
					{/* PONGO /FEED EN EL LINK PORQUE AL LOGEAR REDIRIGIREMOS AL FEED Y QUITAREMOS /PROFILE */}
					<Link to="/profile/feed">
						<button
							className="logIn_submit"
							onClick={() => {
								actions.login(email, password);
							}}>
							Get started!
						</button>
					</Link>
				</form>
			</div>
			<div className="logIn_rightColumn col-md-2 col-sm-0 ">
				<h1>HuMind</h1>
			</div>
		</div>
	);
};
