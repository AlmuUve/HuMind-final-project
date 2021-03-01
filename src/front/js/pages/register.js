import React, { useEffect } from "react";
import { PsychologistRegistrationForm } from "../component/psychologistRegistrationForm";
import "../../styles/home.scss";

export const Register = () => {
	return (
		<div className="row">
			<PsychologistRegistrationForm />
		</div>
	);
};
