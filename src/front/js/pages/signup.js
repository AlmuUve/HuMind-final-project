import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { UserSignUp } from "../component/usersignup.js";
export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState({
		email: "",
		password: "",
		is_psychologist: "",
		name: "",
		lastname: "",
		description: "",
		identity_number: "",
		association_number: "",
		speciality: "",
		company_name: "",
		company_number: ""
	});
	const [help, setHelp] = useState(false);
	const createUser = () => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const isPsychologistFalse = state => {
		setUser({ ...user, is_psychologist: state });
	};

	useEffect(
		() => {
			if (user.is_psychologist == true) {
			} else {
				console.log("soy una compañia");
			}
		},
		[help]
	);
	const userTest = () => {
		setHelp(!help);
	};
	return (
		<>
			<UserSignUp
				onMyClick={state => isPsychologistFalse(state)}
				onMyChange={event => createUser(event)}
				onMyclickUser={() => userTest()}
			/>
		</>
	);
};
