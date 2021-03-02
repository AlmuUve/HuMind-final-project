import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profilecompany } from "./pages/profileCompany";
import { Profilepsychologist } from "./pages/profilePsychologist";
import { Register } from "./pages/register";
import { PsychologistRegistrationForm } from "./component/psychologistRegistrationForm";
import { CompanyRegistrationForm } from "./component/companyRegistrationForm";
import { Navbarpage } from "../js/component/navbar.jsx";
import injectContext from "./store/appContext";
import { LogIn } from "./pages/login";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/company">
						<Profilecompany />
					</Route>
					<Route exact path="/psychologist">
						<Profilepsychologist />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Navbarpage />
						<LogIn />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
