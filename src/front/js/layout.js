import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profile } from "./pages/profile";
import { Register } from "./pages/register";
import { PsychologistRegistrationForm } from "./component/psychologistRegistrationForm";
import { Landing } from "./pages/landing";
import { CompanyRegistrationForm } from "./component/companyRegistrationForm";
import { Footer } from "./component/footer";
import injectContext from "./store/appContext";
import { LogIn } from "./pages/login";
import { Addworkshop } from "./pages/addworkshop";
import { Addsearchworkshop } from "./pages/addnewseachworkshop";
import { Navbarpage } from "../js/component/navbar.jsx";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Navbarpage />
				<Switch>
					<Route exact path="/psychologist/register">
						<PsychologistRegistrationForm />
					</Route>
					<Route exact path="/company/register">
						<CompanyRegistrationForm />
                    </Route>    
					<Route exact path="/">
						<Landing />
					</Route>
					<Route exact path="/add_workshop">
						<Addworkshop />
					</Route>
					<Route exact path="/add_search_workshop">
						<Addsearchworkshop />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<LogIn />
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
