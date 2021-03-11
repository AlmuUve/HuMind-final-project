import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../component/stripecomponent.jsx";
import "../../styles/stripe.scss";

// Make sure to call loadStripe outside of a component’s render to avoid

// recreating the Stripe object on every render.

// loadStripe is initialized with your real test publishable API key.

const promise = loadStripe("");

export const App = () => {
	return (
		<div className="App">
			<Elements stripe={promise}>
				<CheckoutForm />
			</Elements>
		</div>
	);
};
