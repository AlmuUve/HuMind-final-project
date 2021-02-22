import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Profilepsychologist } from "./pages/profilePsychologist";
import injectContext from "./store/appContext";

import injectContext from "./store/appContext";
import { Register } from "./pages/register";
import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/psychologist">
						<Profilepsychologist />
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
