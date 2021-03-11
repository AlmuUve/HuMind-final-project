import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Email = props => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState({
		email_from: store.LoggedUser.name + ", <" + store.LoggedUser.email + ">",
		email_to: "",
		subject: props.subject,
		message: ""
	});

	const inputChange = event => {
		setEmail({ ...email, [event.target.name]: event.target.value });
	};

	return (
		<Fragment>
			<form className="formEmail">
				<div className="row">
					<div className="col-12 inputLabel">
						<label htmlFor="subject" className="titleInputs">
							<b>Subject</b>
						</label>
						<input
							type="text"
							onChange={inputChange}
							className="emailInput form-control"
							placeholder="Type your subject here..."
							name="subject"
							id="subjecte"
							defaultValue={props.subject}
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 inputLabel">
						<label htmlFor="text" className="titleInputs">
							<b>Message</b>
						</label>
						<textarea
							name="message"
							onChange={inputChange}
							className="emailTextArea"
							placeholder="Type your message here..."
							form="usrform"
							id="message"
						/>
					</div>
				</div>
				<div className="row d-flex justify-content-center mb-5">
					<Link
						to={
							store.LoggedUser.is_psychologist
								? "/profile/" +
								  store.LoggedUser.name.replace(" ", "_") +
								  store.LoggedUser.lastname.replace(" ", "_")
								: "/profile/" + store.LoggedUser.company_name.replace(" ", "_")
						}>
						<YellowButton
							type="submit"
							text="Send"
							onClickForm={() => {
								actions.sendEmail(email);
								actions.setUser(null);
							}}
						/>
					</Link>
				</div>
			</form>
		</Fragment>
	);
};
Email.propTypes = {
	subject: PropTypes.string
};
