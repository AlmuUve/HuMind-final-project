import React, { useContext, useEffect, useReducer, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Profiletemplatepsy } from "../component/profilecardpsychologist.jsx";
import { Profiletemplatecompany } from "../component/profilecardcompany.jsx";
import { Coverphoto } from "../component/coverphoto.jsx";
import { YellowButton } from "../component/yellowButton";
import { PsychologistRegistrationForm } from "../component/psychologistRegistrationForm";
import { CompanyRegistrationForm } from "../component/companyRegistrationForm";

export const Editprofile = () => {
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

	if (user.is_psychologist) {
		return <PsychologistRegistrationForm />;
	} else {
		return <CompanyRegistrationForm />;
	}
};
