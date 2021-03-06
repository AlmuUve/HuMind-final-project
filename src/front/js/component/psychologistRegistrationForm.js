import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { YellowButton } from "./yellowButton";
import { BlueButton } from "./blueButton.jsx";
import { Link, useHistory } from "react-router-dom";
import "../../styles/home.scss";

export const PsychologistRegistrationForm = props => {
	const { actions, store } = useContext(Context);
	const tokenInStorage = localStorage.getItem("token");

	const [user, setUser] = useState({
		email: store.email,
		password: store.password,
		is_psychologist: true,
		name: tokenInStorage == null ? "" : store.LoggedUser["name"],
		lastname: tokenInStorage == null ? "" : store.LoggedUser["lastname"],
		identity_number: tokenInStorage == null ? "" : store.LoggedUser["identity_number"],
		association_number: tokenInStorage == null ? "" : store.LoggedUser["association_number"],
		speciality: tokenInStorage == null ? "" : store.LoggedUser["speciality"],
		company_name: tokenInStorage == null ? "" : store.LoggedUser["company_name"],
		company_number: tokenInStorage == null ? "" : store.LoggedUser["company_number"],
		facebook: tokenInStorage == null ? "" : store.LoggedUser["facebook"],
		instagram: tokenInStorage == null ? "" : store.LoggedUser["instagram"],
		twitter: tokenInStorage == null ? "" : store.LoggedUser["twitter"],
		linkedIn: tokenInStorage == null ? "" : store.LoggedUser["linkedIn"],
		youTube: tokenInStorage == null ? "" : store.LoggedUser["youTube"],
		description: tokenInStorage == null ? "" : store.LoggedUser["description"]
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
							src="https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
						/>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-12 inputLabel">
							<label htmlFor="name" className="titleInputs">
								<b>Name</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Enter your name here"
								name="name"
								id="name"
								defaultValue={user.name}
								required
							/>
						</div>
						<div className="col-lg-6 col-md-12 inputLabel">
							<label htmlFor="lastname" className="titleInputs">
								<b>Lastname</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Enter your lastname here"
								name="lastname"
								id="lastname"
								defaultValue={user.lastname}
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-12 inputLabel">
							<label htmlFor="association_number" className="titleInputs">
								<b>Association of Psycologists Number</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Max.9 characters"
								name="association_number"
								id="association_number"
								defaultValue={user.association_number}
								required
							/>
						</div>
						<div className="col-lg-6 col-md-12 inputLabel">
							<label htmlFor="identity_number" className="titleInputs">
								<b>Identity Number</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Max.9 characters"
								name="identity_number"
								id="identity_number"
								defaultValue={user.identity_number}
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12 inputLabel">
							<label htmlFor="speciality" className="titleInputs">
								<b>Speciality</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Your speciality here"
								name="speciality"
								id="speciality"
								defaultValue={user.speciality}
								required
							/>
						</div>
					</div>
					<div className="row">
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
						<Link to={"/profile/" + user.name.replace(" ", "_") + "_" + user.lastname.replace(" ", "_")}>
							<YellowButton
								type="submit"
								text="Submit"
								onClickForm={() => {
									if (tokenInStorage == null) {
										actions.addNewUser(user).then(() => {
											actions.login(user.email, user.password);
											history.push(
												"/profile/" +
													store.LoggedUser.name.replace(" ", "_") +
													"_" +
													store.LoggedUser.lastname.replace(" ", "_")
											);
										});
									} else {
										actions.editUserProfile(user, store.LoggedUser.user_id);
									}
								}}
							/>
						</Link>
						<BlueButton
							className="ButtonBlue"
							text="Back"
							onClickBlue={() =>
								store.LoggedUser.id > 0
									? history.push(
											"/profile/" +
												store.LoggedUser.name.replace(" ", "_") +
												"_" +
												store.LoggedUser.lastname.replace(" ", "_")
									  )
									: history.push("/")
							}
						/>
					</div>
				</div>
			</form>
		</Fragment>
	);
};
