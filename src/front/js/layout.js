import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import { SignUpLogInButton } from "./component/signUpLogInButton";
import { YellowButton } from "./component/yellowButton";
import { DeleteButton } from "./component/deleteButton";
import { EditButton } from "./component/editButton";
import { LandingButton } from "./component/landingButton";
import { WorkshopCard } from "./component/workshopCard";
import { Navbarpage } from "../js/component/navbar.jsx";
import { Landing } from "./pages/landing";
import { SignUp } from "./pages/signup";
import { UserLogIn } from "./pages/login";
import { Profile } from "./pages/profile";
import { Addworkshop } from "./pages/addworkshop";
import { Addsearchworkshop } from "./pages/addnewseachworkshop";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Navbarpage />
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route exact path="/login">
						<UserLogIn />
					</Route>
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route exact path="/profile/:id">
						<Profile />
					</Route>
					<Route exact path="/add_workshop">
						<Addworkshop />
					</Route>
					<Route exact path="/add_search_workshop">
						<Addsearchworkshop />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
