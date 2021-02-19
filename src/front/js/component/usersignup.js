import React, { Component, Fragment } from "react";
// import Photo from "../../img/logIn_picture";

export const UserSignUp = () => (
	<Fragment>
		<body className="signUp_body">
			<div className="signUp_leftColumn col-4">
				<h1>HuMind</h1>
				<img>{Photo}</img>
			</div>
			<div className="signUp_rightColumn col-8">
				<h2>Sign Up</h2>
				<h3>Choose your HuMind account</h3>
				<button className="signUp_psycologist_button" />
				<button className="signUp_company_button" />
				<form className="signUp_form">
					<label className="signUp_label">Email:</label>
					<input className="signUp_input" type="text" id="fname" name="fname" />
					<label className="signUp_label">Password:</label>
					<input className="signUp_input" type="text" id="fname" name="fname" />
					<input className="checkbox_input" type="checkbox" id="scales" name="terms" checked />
					<label className="checkbox_label">I have read and accept the Terms and Conditions</label>
					<button>Get started!</button>
				</form>
			</div>
		</body>
	</Fragment>
);
