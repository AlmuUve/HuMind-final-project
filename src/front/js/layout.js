import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { SignUpLogInButton } from "./component/signUpLogInButton";
import { YellowButton } from "./component/yellowButton";
import { DeleteButton } from "./component/deleteButton";
import { EditButton } from "./component/editButton";
import { LandingButton } from "./component/landingButton";
import { WorkshopCard } from "./component/workshopCard";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<WorkshopCard />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
