import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { SignUpLogInButton } from "./component/signUpLogInButton";
import { YellowButton } from "./component/yellowButton";
import { DeleteButton } from "./component/deleteButton";
import { EditButton } from "./component/editButton";
import { LandingButton } from "./component/landingButton";


//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
          <LandingButton />
					<YellowButton />
					<SignUpLogInButton />
					<DeleteButton />
					<EditButton />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
