import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const UserSignUp = props => {
	const [clicked, setClicked] = useState({
		isPsychologist: "isPsychologistOff",
		isCompany: "isCompanyOff"
	});
	const [show, setShow] = useState("notShow");
	const signUpButtons = document.querySelector("#signUpButtons");
	const email = document.querySelector("#email");
	const password = document.querySelector("#password");

	// checkEmail(email);
	// checkPassword(password);

	const checkButtons = buttons => {
		if (buttons.isPsychologist == "isPsychologistOff" && buttons.isCompany == "isCompanyOff") {
			return false;
		}
		return true;
	};

	// const checkEmail = input => {
	// 	input.addEventListener("focusout", () => {
	// 		let myRegexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 		myRegexEmail.test(input.value);
	// 		getCheck(input);
	// 	});
	// };

	// const checkPassword = input => {
	// 	input.addEventListener("focusout", () => {
	// 		let myRegexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	// 		myRegexPassword.test(input.value);
	// 		getCheck(input);
	// 	});
	// };

	return (
		<div className="signUp_body">
			<div className="signUp_leftColumn offset-md-2 col-md-3 offset-sm-0 col-sm-0">
				<h1>HuMind</h1>
			</div>
			<div className="signUp_rightColumn col-md-5 col-sm-12">
				<Link to={"/home"}>
					<i className="fas fa-times" />
				</Link>
				<h2>Sign Up</h2>
				<h3>Choose your HuMind account</h3>
				<h3 className={show}>You need to choose one</h3>
				<form className="signUp_form">
					<div className="signUp_buttons" id="signUpButtons">
						<button
							className={"signUp_psycologist_button " + clicked.isPsychologist}
							onClick={e => {
								e.preventDefault();
								props.onMyClick(true);
								setClicked({
									isPsychologist: "isPsychologist",
									isCompany: "isCompanyOff"
								});
							}}>
							I AM A PSYCHOLOGIST
						</button>
						<button
							className={"signUp_company_button " + clicked.isCompany}
							name="is_psychologist"
							onClick={e => {
								e.preventDefault();
								props.onMyClick(false);
								setClicked({
									isPsychologist: "isPsychologistOff",
									isCompany: "isCompany"
								});
							}}>
							{" "}
							I AM A COMPANY
						</button>
					</div>
					<label className="signUp_label_email">Email address:</label>
					<input
						className="signUp_input"
						type="text"
						id="email"
						name="email"
						placeholder="Write your email here"
						onChange={props.onMyChange}
					/>
					<label className="signUp_label_password">Password:</label>
					<input
						className="signUp_input"
						type="text"
						id="password"
						name="password"
						placeholder="Write your password here"
						onChange={props.onMyChange}
					/>
					<label className="termsAndConditions">
						<span className="checkmark" />
						<input type="checkbox" />
						<span className="termsAndConditions_text">
							I have read and accept the{" "}
							<span className="linkTermsAndConditions">Terms and Conditions</span>
						</span>
					</label>
					<button
						className="signUp_submit"
						onClick={e => {
							e.preventDefault();
							let validation = checkButtons(clicked);
							console.log(validation);
							if (!validation) {
								setShow("show");
							} else {
								props.onMyclickUser();
							}
						}}>
						Get started!
					</button>
				</form>
			</div>
		</div>
	);
};
UserSignUp.propTypes = {
	onMyClick: PropTypes.any,
	onMyChange: PropTypes.any,
	onMyclickUser: PropTypes.any
};
