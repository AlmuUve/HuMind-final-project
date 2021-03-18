import React, { useContext, useState, Fragment, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { YellowButton } from "./yellowButton";
import "../../styles/home.scss";

export const Email = props => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState({
		email_from: name + "from HUMIND, <" + store.LoggedUser.email + ">",
		email_to: "",
		subject: store.subjectEmail,
		message: ""
    });
    const [name, setName] = useState("");
    
    useEffect(() => {
		store.LoggedUser.is_psychologist
			? setName(toUpperCase(store.LoggedUser.name) + " " + toUpperCase(store.LoggedUser.lastname))
			: setName(toUpperCase(store.LoggedUser.company_name));
	}, [store.LoggedUser]);

	const inputChange = event => {
		setEmail({ ...email, [event.target.name]: event.target.value });
	};

	const history = useHistory();

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
							defaultValue={store.subjectEmail ? store.subjectEmail : ""}
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
							required
						/>
					</div>
				</div>
				<div className="row d-flex justify-content-center mb-5">
					<YellowButton
						type="submit"
						text="Send"
						onClickForm={e => {
							e.preventDefault();
							props.onClickEmail();
							actions.sendEmail(email);
							actions.setSubjectEmail(null);
						}}
					/>
				</div>
			</form>
		</Fragment>
	);
};
Email.propTypes = {
	onClickEmail: PropTypes.func,
	subject: PropTypes.string
};
