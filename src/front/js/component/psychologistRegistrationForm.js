import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { YellowButton } from "./yellowButton";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { EditButton } from "./editButton";

export const PsychologistRegistrationForm = props => {
	const { actions, store } = useContext(Context);
	const [user, setUser] = useState({
		email: store.email,
		password: store.password,
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
						<div className="col-6 inputLabel">
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
								required
							/>
						</div>
						<div className="col-6 inputLabel">
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
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-6 inputLabel">
							<label htmlFor="email" className="titleInputs">
								<b>E-mail</b>
							</label>
							<input
								type="text"
								defaultValue={store.email}
								className="workshopInput form-control"
								name="email"
								id="email"
								required
							/>
						</div>
						<div className="col-6 inputLabel">
							<label htmlFor="identitynumber" className="titleInputs">
								<b>Identity Number</b>
							</label>
							<input
								type="text"
								onChange={inputChange}
								className="workshopInput form-control"
								placeholder="Max.9 characters"
								name="identity_number"
								id="identitynumber"
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-6 inputLabel">
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
								required
							/>
						</div>
						<div className="col-6 inputLabel">
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
									actions.addNewUser(user);
									actions.setHelp(user.is_psychologist);
								}}
							/>
						</Link>
					</div>
				</div>
			</form>
		</Fragment>
	);
};
