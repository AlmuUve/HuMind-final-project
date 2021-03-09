import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import { Navbarpage } from "../js/component/navbar.jsx";
import { Landing } from "./pages/landing";
import { SignUp } from "./pages/signup";
import { Profile } from "./pages/profile";
import { Editprofile } from "./pages/editprofile";
import { UserLogIn } from "./pages/login";
import { Addworkshop } from "./pages/addworkshop";
import { Addsearchworkshop } from "./pages/addnewseachworkshop";
import { Feed } from "./pages/feed";
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
					<Route exact path="/edit_profile">
						<Editprofile />
					</Route>
					<Route exact path="/feed">
						<Feed />
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
∫