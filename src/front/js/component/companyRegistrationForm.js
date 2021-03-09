import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { YellowButton } from "./yellowButton";
import { Link, useHistory } from "react-router-dom";
import "../../styles/home.scss";

export const CompanyRegistrationForm = () => {
	const { actions, store } = useContext(Context);
	const tokenInStorage = localStorage.getItem("token");

	const [user, setUser] = useState({
		email: store.email,
		password: store.password,
		is_psychologist: false,
		name: tokenInStorage == null ? "" : store.user["name"],
		lastname: tokenInStorage == null ? "" : store.user["lastname"],
		identity_number: tokenInStorage == null ? "" : store.user["identity_number"],
		association_number: tokenInStorage == null ? "" : store.user["association_number"],
		speciality: tokenInStorage == null ? "" : store.user["speciality"],
		company_name: tokenInStorage == null ? "" : store.user["company_name"],
		company_number: tokenInStorage == null ? "" : store.user["company_number"],
		facebook: tokenInStorage == null ? "" : store.user["facebook"],
		instagram: tokenInStorage == null ? "" : store.user["instagram"],
		twitter: tokenInStorage == null ? "" : store.user["twitter"],
		linkedIn: tokenInStorage == null ? "" : store.user["linkedIn"],
		youTube: tokenInStorage == null ? "" : store.user["youTube"],
		description: tokenInStorage == null ? "" : store.user["description"]
	});

	const history = useHistory();

	const inputChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	return (
		<Fragment>
			<form className="container formAddWorkshop">
				<div className="container">
					<h2 className="row titleAddWorkshop">CREATE YOUR PROFILE</h2>
					<div className="row d-flex justify-content-center mb-5">
						<img
							className="formAvatar"
							src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
						/>
					</div>
					<div className="row">
						<div className="col-6 inputLabel">
							<label htmlFor="company_name" className="titleInputs">
								<b>Company Name</b>
							</label>
							<input
								type="text"
								onChange={e => {
									inputChange(e);
									actions.setpathProfileCompany(e.target.value);
								}}
								className="workshopInput form-control"
								placeholder="Enter Your Company Name Here"
								name="company_name"
								id="company_name"
								defaultValue={user.company_name}
								required
							/>
						</div>
						<div className="col-6 inputLabel">
							<label htmlFor="company_number" className="titleInputs">
								<b>Company Number</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Enter Your Company Number Here"
								name="company_number"
								id="company_number"
								defaultValue={user.company_number}
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12 inputLabel">
							<label htmlFor="email" className="titleInputs">
								<b>E-mail</b>
							</label>
							<input
								type="text"
								defaultValue={store.email}
								className="workshopInput form-control"
								name="email"
								id="email"
							/>
						</div>
						<div className="col-12 inputLabel">
							<label htmlFor="facebook" className="titleInputs">
								<b>Facebook</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Your Facebook profile here"
								name="facebook"
								id="facebook"
								defaultValue={user.facebook}
								required
							/>
						</div>
						<div className="col-12 inputLabel">
							<label htmlFor="instagram" className="titleInputs">
								<b>Instagram</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Your Instagram profile here"
								name="instagram"
								id="instagram"
								defaultValue={user.instagram}
								required
							/>
						</div>
						<div className="col-12 inputLabel">
							<label htmlFor="twitter" className="titleInputs">
								<b>Twitter</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Your Twitter profile here"
								name="twitter"
								id="twitter"
								defaultValue={user.twitter}
								required
							/>
						</div>
						<div className="col-12 inputLabel">
							<label htmlFor="linkedIn" className="titleInputs">
								<b>LinkedIn</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Your LinkedIn profile here"
								name="linkedIn"
								id="linkedIn"
								defaultValue={user.linkedIn}
								required
							/>
						</div>
						<div className="col-12 inputLabel">
							<label htmlFor="youTube" className="titleInputs">
								<b>YouTube</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Your YouTube profile here"
								name="youTube"
								id="youTube"
								defaultValue={user.youTube}
								required
							/>
						</div>
						<div className="col-12 inputLabel">
							<label htmlFor="description" className="titleInputs">
								<b>Description</b>
							</label>
							<textarea
								name="description"
								onChange={inputChange}
								className="workshopTextArea form-control"
								placeholder="Write a description here"
								form="usrform"
								id="description"
								defaultValue={user.description}
								required
							/>
						</div>
					</div>
					<div className="row d-flex justify-content-center mb-5">
						<Link to={store.pathProfileCompany}>
							<YellowButton
								type="submit"
								text="Submit"
								onClickForm={() => {
									if (tokenInStorage == null) {
										actions.addNewUser(user).then(() => {
											actions.login(user.email, user.password);
											history.push("/profile/:id");
										});
									} else {
										actions.editUserProfile(user);
									}
									// actions.setHelp(user.is_psychologist);
								}}
							/>
						</Link>
					</div>
				</div>
			</form>
		</Fragment>
	);
};
