import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PsychologistRegistrationForm } from "./component/psychologistRegistrationForm";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/psychologist/register">
						<PsychologistRegistrationForm />
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
