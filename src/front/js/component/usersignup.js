import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const UserSignUp = props => (
	<body className="signUp_body">
		<div className="signUp_leftColumn offset-md-2 col-md-3 offset-sm-0 col-sm-0">
			<h1>HuMind</h1>
		</div>
		<div className="signUp_rightColumn col-md-5 col-sm-12">
			<Link to={"/home"}>
				<i className="fas fa-times" />
			</Link>
			<h2>Sign Up</h2>
			<h3>Choose your HuMind account</h3>
			<form className="signUp_form">
				<div className="signUp_buttons">
					<button
						className="signUp_psycologist_button"
						onClick={e => {
							e.preventDefault();
							props.onMyClick(true);
						}}>
						I AM A PSYCHOLOGIST
					</button>
					<button
						className="signUp_company_button"
						name="is_psychologist"
						onClick={e => {
							e.preventDefault();
							props.onMyClick(false);
						}}>
						{" "}
						I AM A COMPANY
					</button>
				</div>
				<label className="signUp_label_email">Email address:</label>
				<input
					className="signUp_input"
					type="text"
					id="fname"
					name="email"
					placeholder="Write your email here"
					onChange={props.onMyChange}
				/>
				<label className="signUp_label_password">Password:</label>
				<input
					className="signUp_input"
					type="text"
					id="fname"
					name="password"
					placeholder="Write your password here"
					onChange={props.onMyChange}
				/>
				<label className="termsAndConditions">
					<span className="checkmark" />
					<input type="checkbox" />
					<span className="termsAndConditions_text">
						I have read and accept the <span className="linkTermsAndConditions">Terms and Conditions</span>
					</span>
				</label>
				<button
					className="signUp_submit"
					onClick={e => {
						e.preventDefault();
						props.onMyclickUser();
					}}>
					Get started!
				</button>
			</form>
		</div>
	</body>
);
UserSignUp.propTypes = {
	onMyClick: PropTypes.any,
	onMyChange: PropTypes.any,
	onMyclickUser: PropTypes.any
};
