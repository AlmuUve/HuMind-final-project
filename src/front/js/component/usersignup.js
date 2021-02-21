import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// import { Photo } from "/workspace/HuMind-final-project/src/front/img/signUp_picture";

export const UserSignUp = () => (
	<Fragment className="background">
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
				<div className="signUp_buttons">
					<button className="signUp_psycologist_button">I AM A PSYCHOLOGIST</button>
					<button className="signUp_company_button"> I AM A COMPANY</button>
				</div>
				<form className="signUp_form">
					<label className="signUp_label_email">Email address:</label>
					<input
						className="signUp_input"
						type="text"
						id="fname"
						name="fname"
						placeholder="Write your email here"
					/>
					<label className="signUp_label_password">Password:</label>
					<input
						className="signUp_input"
						type="text"
						id="fname"
						name="fname"
						placeholder="Write your password here"
					/>
					<label className="termsAndConditions">
						<span className="checkmark" />
						<input type="checkbox" />
						<span className="termsAndConditions_text">
							I have read and accept the{" "}
							<span className="linkTermsAndConditions">Terms and Conditions</span>
						</span>
					</label>
					<button className="signUp_submit">Get started!</button>
				</form>
			</div>
		</body>
	</Fragment>
);
