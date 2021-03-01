import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profilecompany } from "./pages/profileCompany";
import { Profilepsychologist } from "./pages/profilePsychologist";
import { Register } from "./pages/register";
import { PsychologistRegistrationForm } from "./component/psychologistRegistrationForm";
import { CompanyRegistrationForm } from "./component/companyRegistrationForm";
import { Footer } from "./component/footer";
import injectContext from "./store/appContext";
import { Addworkshop } from "./pages/addworkshop";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
					{/* <Route exact path="/">
						<PsychologistRegistrationForm />
						<Footer />
					</Route>
					<Route exact path="/user">
						<CompanyRegistrationForm />
<<<<<<< HEAD
					</Route> */}
					<Route exact path="/add_workshop">
						<Addworkshop />
=======
						<Footer />
>>>>>>> main
					</Route>
					<Route exact path="/company">
						<Profilecompany />
						<Footer />
					</Route>
					<Route exact path="/psychologist">
						<Profilepsychologist />
						<Footer />
					</Route>
					<Route exact path="/register">
						<Register />
						<Footer />
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
