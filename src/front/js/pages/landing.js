import React, { useContext, Component, Fragment } from "react";
import { Context } from "../store/appContext";

import { LandingButton } from "../component/landingButton";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import { SearchWorkshopCard } from "../component/searchworkshopcard";

export const Landing = () => {
	const { store, actions } = useContext(Context);
	let listSearchWorkshops = store.searchWorkshops.map((item, index) => {
		console.log(listSearchWorkshops);
		return <SearchWorkshopCard item={item} key={index.toString()} />;
	});
	return (
		<Fragment>
			{/* <div className="coverContainer">
			<img className="coverPic" src="https://i.imgur.com/LsTHJu1.png" />
			<h3 className="card-img-overlay coverText">FOR COMPANIES COMMITED TO THEIR EMPLOYEES</h3>
		</div>
		<div className="landingDescription container-fluid row">
			<div className="motto offset-1 col-md-3 col-xs-12">
				WE CONNECT <span className="blueSpan">COMPANIES</span> WITH{" "}
				<span className="yellowSpan">PSYCHOLOGISTS</span>
			</div>
			<div className="description col-md-7 col-xs-12">
				<p>
					We believe in the importance of putting{" "}
					<span className="blueSpan">mental health and well- being first.</span>{" "}
				</p>
				<p>
					We want to promote <span className="blueSpan">training from within companies</span> that leads to
					improvement in the well-being of their employees that is reflected both personally and at work.
				</p>
			</div>
		</div>
		<div className="iAmAcompany container-fluid row">
			<div className="iAmAcompany1 col-md-4 col-xs-12">
				<p className="iAmAcompanyTitle">I AM A COMPANY</p>
			</div>
			<div className="iAmAcompany2 col-md-4 col-xs-12">
				<p className="iAmAcompanyText1">And I am searching for psycology services</p>
			</div>
			<div className="iAmAcompany3 col-md-4 col-xs-12">
				<p className="iAmAcompanyText2">
					<span className="blueSpan">+</span> Do you care about your employees well-being?
				</p>
				<p className="iAmAcompanyText2">
					<span className="blueSpan">+</span> Would you like to offer social benefits that give added value?
				</p>
			</div>
		</div>
		<div className="iAmApsychologist container-fluid row">
			<div className="iAmApsychologist1 col-md-4 col-xs-12">
				<p className="iAmApsychologistTitle">I AM A PSYCHOLOGIST</p>
			</div>
			<div className="iAmApsychologist2 col-md-4 col-xs-12">
				<p className="iAmApsychologistText1">And I am specialized in corporate services</p>
			</div>
			<div className="iAmApsychologist3 col-md-4 col-xs-12">
				<p className="iAmApsychologistText2">
					<span className="blueSpan">+</span> Do you organize workshops or sessions?
				</p>
				<p className="iAmApsychologistText2">
					<span className="blueSpan">+</span> Would you like to make your client portfolio grow?
				</p>
			</div>
		</div>
		<Link to="/signup">
			<LandingButton className="landingButton " />
		</Link> */}

			<div>{listSearchWorkshops}</div>
		</Fragment>
	);
};
