import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profile } from "./pages/profile";
import { Register } from "./pages/register";
import { PsychologistRegistrationForm } from "./component/psychologistRegistrationForm";
import { CompanyRegistrationForm } from "./component/companyRegistrationForm";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<PsychologistRegistrationForm />
					</Route>
					<Route exact path="/user">
						<CompanyRegistrationForm />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route exact path="/register">
						<Register />
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
