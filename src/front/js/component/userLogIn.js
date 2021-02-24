import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export const UserLogIn = props => {
	const { actions, store } = useContext(Context);
	const [user, setUser] = useState("");

	return (
		<div className="logIn_body">
			<div className="logIn_leftColumn col-md-5 col-sm-12">
				<Link to={"/home"}>
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
							setUser(e.target.value);
						}}
					/>
					<label className="logIn_label_password">Password:</label>
					<input
						className="logIn_input"
						type="text"
						id="fname"
						name="password"
						placeholder="Write your password here"
						onChange={e => {
							setUser(e.target.value);
						}}
					/>
					<button
						className="logIn_submit"
						onClick={e => {
							e.preventDefault();
							actions.login();
						}}>
						Get started!
					</button>
				</form>
			</div>
			<div className="logIn_rightColumn offset-md-2 col-md-3 offset-sm-0 col-sm-0">
				<h1>HuMind</h1>
			</div>
		</div>
	);
};
