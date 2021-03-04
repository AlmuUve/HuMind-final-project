import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { YellowButton } from "./yellowButton";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const CompanyRegistrationForm = () => {
	const { actions, store } = useContext(Context);
	const editUserInfo = JSON.parse(localStorage.getItem("user"));
	console.log(typeof editUserInfo, "@@@@@@@@@@@@");
	const [user, setUser] = useState({
		email: store.email,
		password: store.password,
		is_psychologist: false,
		name: editUserInfo == null ? "" : editUserInfo["name"],
		lastname: "",
		identity_number: "",
		association_number: "",
		speciality: "",
		company_name: editUserInfo == null ? "" : editUserInfo["company_name"],
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
	console.log(user.company_name);
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
								onChange={inputChange}
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
								required
							/>
						</div>
					</div>
					<div className="row d-flex justify-content-center mb-5">
						<Link to="/profile">
							<YellowButton
								type="submit"
								text="Submit"
								onClickForm={() => {
									editUserInfo == null ? actions.addNewUser(user) : actions.editUserProfile(user);
								}}
							/>
						</Link>
					</div>
				</div>
			</form>
		</Fragment>
	);
};
