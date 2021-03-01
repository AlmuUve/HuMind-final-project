import React, { useContext, useState, useEffect, useReducer } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { UserLogIn } from "../component/userLogIn";

export const LogIn = () => {
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

	const [firstStep, setFirstStep] = useState(true);

	const submitUserInformation = () => {
		setFirstStep(false);
	};

	if (firstStep) {
		return <UserLogIn key="0" id="firstStep" className="" onMyclickUser={() => submitUserInformation()} />;
	}

	if (!firstStep && user.is_psychologist) {
		return <div>Prueba 1</div>;
	} else {
		return <div>Prueba 2</div>;
	}
};
