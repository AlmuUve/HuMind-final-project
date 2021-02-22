import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const PsychologistRegistrationForm = () => {
	const { actions, store } = useContext(Context);
	let name = document.querySelector("#name"); //.value
	let lastname = document.querySelector("#lastname");
	let email = document.querySelector("#email");
	let identitynumber = document.querySelector("#identitynumber");
	let associationnumber = document.querySelector("#associationnumber");
	let speciality = document.querySelector("#speciality");
	let facebook = document.querySelector("#facebook");
	let instagram = document.querySelector("#instagram");
	let twitter = document.querySelector("#twitter");
	let linkedIn = document.querySelector("#linkedIn");
	let youTube = document.querySelector("#youTube");
	let description = document.querySelector("#description");
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
							<input type="text" placeholder="Enter your name here" name="name" id="name" required />
						</div>
						<div className="col-6">
							<label htmlFor="lastname">
								<b>Lastname</b>
							</label>
							<input
								type="text"
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
							<input type="text" placeholder="Enter e-mail here" name="email" id="email" required />
						</div>
						<div className="col-6">
							<label htmlFor="identitynumber">
								<b>Identity Number</b>
							</label>
							<input
								type="text"
								placeholder="Max.9 characters"
								name="identitynumber"
								id="identitynumber"
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<label htmlFor="associationnumber">
								<b>Association of Psycologists Number</b>
							</label>
							<input
								type="text"
								placeholder="Max.9 characters"
								name="associationnumber"
								id="associationnumber"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="speciality">
								<b>Speciality</b>
							</label>
							<input
								type="text"
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
						onClick={() => {
							actions.addPsychologist(
								name.value,
								lastname.value,
								email.value,
								identitynumber.value,
								associationnumber.value,
								speciality.value,
								facebook.value,
								instagram.value,
								twitter.value,
								linkedIn.value,
								youTube.value,
								description.value
							);
						}}>
						Submit
					</button>
				</div>
			</form>
		</Fragment>
	);
};
