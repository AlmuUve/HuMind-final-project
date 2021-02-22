import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

<<<<<<< HEAD
// import { Home } from "./pages/home";
import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";
import { DeleteButton } from "./component/deleteButton";
=======
import { Profilepsychologist } from "./pages/profilePsychologist";
import injectContext from "./store/appContext";

import injectContext from "./store/appContext";
import { Register } from "./pages/register";
import injectContext from "./store/appContext";

>>>>>>> main

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
<<<<<<< HEAD
				<ScrollToTop>
					{/* <Navbar /> */}
					<Switch>
						<Route exact path="/profile/1" component={DeleteButton} />
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
=======
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
>>>>>>> main
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
