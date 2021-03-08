import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { YellowButton } from "./yellowButton";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Email = () => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState({
		email_from: "Jose, <jagutierrezc7@gmail.com",
		email_to: "rafaelagcalves@outlook.com",
		subject: "",
		message: ""
	});

	const inputChange = event => {
		setEmail({ ...email, [event.target.name]: event.target.value });
	};

	return (
		<Fragment>
			<form className="container formAddWorkshop">
				<div className="container col-8">
					<div className="row">
						<div className="col-12 inputLabel">
							<label htmlFor="subject" className="titleInputs">
								<b>Subject</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Type your subject here..."
								name="subject"
								id="subjecte"
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
								className="workshopTextArea form-control"
								placeholder="Type your message here..."
								form="usrform"
								id="message"
							/>
						</div>
					</div>
					<div className="row d-flex justify-content-center mb-5">
						<Link to="/profile">
							<YellowButton
								type="submit"
								text="Send"
								onClickForm={() => {
									actions.sendEmail(email);
									console.log("hola", email);
								}}
							/>
						</Link>
					</div>
				</div>
			</form>
		</Fragment>
	);
};