import React, { useEffect } from "react";
import { PsychologistRegistrationForm } from "../component/psychologistRegistrationForm";
import { Navbarpage } from "../component/navbar.jsx";

import "../../styles/home.scss";

export const Register = () => {
	return (
		<>
			<div className="row">
				<Navbarpage />
			</div>
			<div className="row">
				<PsychologistRegistrationForm />
			</div>
		</>
	);
};
