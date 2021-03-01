import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { EditButton } from "./editButton";

export const PsychologistRegistrationForm = props => {
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
					<h2 className="title_psy_registration">CREATE YOUR PROFILE</h2>
					<div className="row">
						<div className="col-6">
							<label htmlFor="name">
								<b>Name</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Enter your name here"
								name="name"
								id="name"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="lastname">
								<b>Lastname</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Enter your lastname here"
								name="lastname"
								id="lastname"
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<label htmlFor="email">
								<b>E-mail</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Enter e-mail here"
								name="email"
								id="email"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="identitynumber">
								<b>Identity Number</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Max.9 characters"
								name="identitynumber"
								id="identitynumber"
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<label htmlFor="association_number">
								<b>Association of Psycologists Number</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Max.9 characters"
								name="association_number"
								id="association_number"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="speciality">
								<b>Speciality</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Your speciality here"
								name="speciality"
								id="speciality"
								required
							/>
						</div>
					</div>
					<div className="row">
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
							console.log(user);
							actions.addNewUser(user);
						}}>
						Submit
					</button>
				</div>
			</form>
		</Fragment>
	);
};
