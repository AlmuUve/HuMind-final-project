import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import { Profilecompany } from "./pages/profileCompany";
import { Profilepsychologist } from "./pages/profilePsychologist";
import { Register } from "./pages/register";
import { PsychologistRegistrationForm } from "./component/psychologistRegistrationForm";
import { CompanyRegistrationForm } from "./component/companyRegistrationForm";
import { Navbarpage } from "../js/component/navbar.jsx";
=======

>>>>>>> main
import injectContext from "./store/appContext";

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
<<<<<<< HEAD
					<Route exact path="/company">
						<Profilecompany />
=======
					<Route exact path="/">
						<Landing />
					</Route>
					<Route exact path="/login">
						<UserLogIn />
					</Route>
					<Route exact path="/signup">
						<SignUp />
>>>>>>> main
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route exact path="/add_workshop">
						<Addworkshop />
					</Route>
<<<<<<< HEAD
					<Route exact path="/login">
						<Navbarpage />
						<LogIn />
=======
					<Route exact path="/add_search_workshop">
						<Addsearchworkshop />
>>>>>>> main
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
