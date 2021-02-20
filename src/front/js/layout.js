import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Home } from "./pages/home";
import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";
import { DeleteButton } from "./component/deleteButton";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Switch>
						<Route exact path="/profile/1" component={DeleteButton} />
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
