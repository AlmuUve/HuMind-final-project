import React, { useContext, useState, useEffect, useReducer } from "react";
import { Context } from "../store/appContext";
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

	const [submit, setSubmit] = useState(false);

	const createUser = () => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const isPsychologistFalse = state => {
		setUser({ ...user, is_psychologist: state });
	};

	const [firstStep, setFirstStep] = useState(true);

	const submitUserInformation = () => {
		setFirstStep(false);
	};

	if (firstStep) {
		return (
			<UserSignUp
				key="0"
				id="firstStep"
				className=""
				onMyClick={state => isPsychologistFalse(state)}
				onMyChange={event => createUser(event)}
				onMyclickUser={() => submitUserInformation()}
			/>
		);
	}

	if (!firstStep && user.is_psychologist) {
		return <div>Prueba 1</div>;
	} else {
		return <div>Prueba 2</div>;
	}
};
