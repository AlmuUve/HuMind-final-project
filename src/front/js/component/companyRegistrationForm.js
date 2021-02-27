import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const CompanyRegistrationForm = () => {
	const { actions, store } = useContext(Context);
	const [user, setUser] = useState({
		email: "",
		password: "",
		is_psychologist: true,
		name: "",
		lastname: "",
		identity_number: "",
		association_number: "",
		speciality: "",
		company_name: "",
		company_number: "",
		facebook: "",
		instagram: "",
		twitter: "",
		linkedIn: "",
		youTube: "",
		description: ""
	});

	const inputChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	return (
		<Fragment>
			<form action="/action_page.php">
				<div className="container">
					<h2>CREATE YOUR PROFILE</h2>
					<div className="row">
						<div className="col-6">
							<label htmlFor="company_name">
								<b>Company Name</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Enter Your Company Name Here"
								name="company_name"
								id="company_name"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="company_number">
								<b>Company Number</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Enter Your Company Number Here"
								name="company_number"
								id="company_number"
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="email">
								<b>E-mail</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Enter E-mail Here"
								name="email"
								id="email"
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="facebook">
								<b>Facebook</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Your Facebook profile here"
								name="facebook"
								id="facebook"
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="instagram">
								<b>Instagram</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Your Instagram profile here"
								name="instagram"
								id="instagram"
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="twitter">
								<b>Twitter</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Your Twitter profile here"
								name="twitter"
								id="twitter"
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="linkedIn">
								<b>LinkedIn</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Your LinkedIn profile here"
								name="linkedIn"
								id="linkedIn"
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="youTube">
								<b>YouTube</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Your YouTube profile here"
								name="youTube"
								id="youTube"
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="description">
								<b>Description</b>
							</label>
							<textarea
								name="description"
								onChange={inputChange}
								placeholder="Write a description here"
								form="usrform"
								id="description"
							/>
						</div>
						<div className="col-12">
							<p>IMAGE</p>
						</div>
					</div>

					<button
						className="submit_button"
						type="submit"
						onClick={e => {
							e.preventDefault();
							actions.addNewUser(user);
						}}>
						Submit
					</button>
				</div>
			</form>
		</Fragment>
	);
};
