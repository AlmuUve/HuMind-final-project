import React, { Component, useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { Modal } from "../component/modal.jsx";

export const UserLogIn = props => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const [state, setState] = useState({
		showModal: false
	});

	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);

	useEffect(() => {
		store.wrongLoging == false ? setState({ showModal: true }) : setState({ showModal: false });
	}, [store.wrongLoging]);

	return (
		<div className="logIn_body d-flex justify-content-center ">
			<div className="logIn_lefttColumn col-md-5 col-sm-12">
				<Link to={"/"} className="buttonBackLogin">
					<i className="fas fa-times iconButtonBack" />
				</Link>
				<h2 className="logInTitle">Log In</h2>
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
					<Link to={store.LoggedUser.id > 0 ? history.push("/feed") : "/login"}>
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
			<div className="logIn_rightColumn col-md-3 col-sm-0 "></div>
			<Modal
				show={state.showModal}
				onClosed={() => {
					setState({ showModal: false });
					actions.setWrongLoging(true);
				}}
				text="Your email or your passwords does not exist"
				titleModal="SOMETHING IS WRONG"
				confirmation="Back"
				classNameEmail="ButtonBlueModal"
			/>
		</div>
	);
};
