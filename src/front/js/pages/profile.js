import React, { useContext, useEffect, useReducer, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import "../../styles/index.scss";
import { Profiletemplatepsy } from "../component/profilecardpsychologist.jsx";
import { Profiletemplatecompany } from "../component/profilecardcompany.jsx";
import { Coverphoto } from "../component/coverphoto.jsx";
import { YellowButton } from "../component/yellowButton";
import { WorkshopCard } from "../component/workshopCard";
import { SearchWorkshopCard } from "../component/searchworkshopcard";
import { Email } from "../component/email.jsx";
import { Modal } from "../component/modal.jsx";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [active1, setActive1] = useState("active");
	const [active2, setActive2] = useState("");
	const [textButton, setTextButton] = useState("pillsButtons");
	const [textButton2, setTextButton2] = useState("pillsColor");
	const [ctaWorkshops, setCtaWorkshops] = useState("ctaWorkshops");
	const [ctaSearch, setCtaSearch] = useState("ctaWorkshops");

	const history = useHistory();

	//LOCALSTORAGE\\

	// useEffect(() => {
	// 	actions.decode();
	// }, []);

	//MODAL FUNCTIONS\\

	const [state, setState] = useState({
		showModal: false
	});

	//RENDER BUTTONS AND AVATARES\\

	const [addButtonWorkshop, setAddButtonWorkshop] = useState(
		<Link className="addWorkshop" to={"/add_workshop/" + store.LoggedUser.name + "_" + store.LoggedUser.lastname}>
			<YellowButton text="ADD" />
		</Link>
	);

	const [addButtonSearch, setAddButtonSearch] = useState(
		<Link className="addWorkshop" to={"/add_workshop/" + store.LoggedUser.company_name}>
			<YellowButton text="ADD" />
		</Link>
	);

	const changeViewPills1 = () => {
		setActive1("active");
		setActive2("");
	};

	const changeViewPills2 = () => {
		setActive1("");
		setActive2("active");
	};

	const changeTextButtonColor = () => {
		setTextButton("pillsColor");
		setTextButton2("pillsButtons");
	};

	const changeTextButtonColor2 = () => {
		setTextButton("pillsButtons");
		setTextButton2("pillsColor");
	};

	useEffect(() => {
		if (store.user != null) {
			changeViewPills2();
			changeTextButtonColor();
		} else {
			changeViewPills1();
			changeTextButtonColor2();
			setTextButton2("disabled");
		}
	}, [store.user]);

	useEffect(() => {
		if (store.user != null) {
			setAddButtonWorkshop("");
			setAddButtonSearch("");
		} else {
			setAddButtonWorkshop(
				<Link
					className="addWorkshop"
					to={"/add_workshop/" + store.LoggedUser.name + "_" + store.LoggedUser.lastname}>
					<YellowButton text="ADD" />
				</Link>
			);
			setAddButtonSearch(
				<Link className="addWorkshop" to={"/add_workshop/" + store.LoggedUser.company_name}>
					<YellowButton text="ADD" />
				</Link>
			);
		}
	}, [store.user]);

	// CRETE "CTA" MESSAGE \\

	useEffect(() => {
		if (store.user != null) {
			setCtaWorkshops("ctaWorkshopsNone");
		} else if (store.user == null) {
			if (store.workshops.length > 0) {
				setCtaWorkshops("ctaWorkshopsNone");
			}
		}
	}, [store.workshops, store.user]);

	useEffect(() => {
		if (store.user != null) {
			setCtaSearch("ctaWorkshopsNone");
		} else if (store.user == null) {
			if (store.searchWorkshops.length > 0) {
				setCtaSearch("ctaWorkshopsNone");
			}
		}
	}, [store.searchWorkshops, store.user]);

	//MAPING WORKSHOPS\\

	let userWorkshops = store.workshops.map((item, index) => {
		return <WorkshopCard item={item} key={index.toString()} edit={() => (store.currentWorkshop = item)} />;
	});

	let listSearchWorkshops = store.searchWorkshops.map((item, index) => {
		return <SearchWorkshopCard item={item} key={index.toString()} edit={() => (store.currentWorkshop = item)} />;
	});

	if (store.LoggedUser.is_psychologist) {
		return (
			<>
				<div className="container-fluid">
					<Coverphoto photo={store.user ? "coverPhotoCompany" : "coverPhotoPsy"} />
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-4 col-sm-12 profileCard">
								<Profiletemplatepsy />
							</div>
							<div className="col-lg-8 col-sm-12">
								<div className="container-fluid">
									<div className="row pillsMenu">
										<ul className="nav nav-pills">
											<li className="nav-item">
												<button
													className={"nav-link " + textButton}
													href="#home"
													data-toggle="pill"
													aria-controls="home"
													aria-selected="true"
													aria-pressed="true"
													onClick={() => {
														if (store.user != null) {
															changeViewPills1();
															changeTextButtonColor2();
														}
													}}>
													{store.user ? "SEARCHS" : "WORKSHOPS"}
												</button>
											</li>
											<li className="nav-item">
												<button
													className={"nav-link " + textButton2}
													href="#menu2"
													data-toggle="pill"
													aria-controls="menu2"
													aria-selected="false"
													onClick={() => {
														if (store.user != null) {
															changeViewPills2();
															changeTextButtonColor();
														}
													}}>
													CONTACT
												</button>
											</li>
										</ul>
									</div>
								</div>
								<div className="tab-content viewPills">
									<div
										className={"tab-pane" + active1}
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab">
										{addButtonWorkshop}
										{store.user ? listSearchWorkshops : userWorkshops}
										<div className={ctaWorkshops}>
											<h5 className="ctaTitle">Please publish your first workshop!</h5>
											<p className="ctaP">
												This way you will get more visibility and companies will be able to
												contact you via email. (use ADD button)
											</p>
										</div>
									</div>
									<div
										className={"tab-pane " + active2}
										id="menu2"
										role="tabpanel"
										aria-labelledby="home-tab">
										<Email
											onClickEmail={() => {
												setState({ showModal: true });
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Modal
						show={state.showModal}
						onClosed={() => setState({ showModal: false })}
						text="Your email has been succesfully send"
						titleModal=""
						confirmation="Go Feed"
						classNameEmail="ButtonBlueModal"
						onSend={() => {
							history.push("/feed");
							actions.setSubjectEmail(null);
						}}
					/>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="container-fluid">
					<Coverphoto photo={store.user ? "coverPhotoPsy" : "coverPhotoCompany"} />
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-4 col-sm-12 profileCard">
								<Profiletemplatecompany />
							</div>
							<div className="col-lg-8 col-sm-12">
								<div className="container-fluid">
									<div className="row pillsMenu">
										<ul className="nav nav-pills">
											<li className="nav-item">
												<button
													className={"nav-link " + textButton}
													href="#home"
													data-toggle="pill"
													aria-controls="home"
													aria-selected="true"
													aria-pressed="true"
													onClick={() => {
														if (store.user != null) {
															changeViewPills1();
															changeTextButtonColor2();
														}
													}}>
													{store.user ? "WORKSHOPS" : "SEARCHS"}
												</button>
											</li>
											<li className="nav-item">
												<button
													className={"nav-link " + textButton2}
													href="#menu2"
													data-toggle="pill"
													aria-controls="menu2"
													aria-selected="false"
													onClick={() => {
														if (store.user != null) {
															changeViewPills2();
															changeTextButtonColor();
														}
													}}>
													CONTACT
												</button>
											</li>
										</ul>
									</div>
								</div>
								<div className="tab-content viewPills">
									<div
										className={"tab-pane" + active1}
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab">
										{addButtonSearch}
										{store.user ? userWorkshops : listSearchWorkshops}
										<div className={ctaSearch}>
											<h5 className="ctaTitle">Post your first search!</h5>
											<p className="ctaP">
												Remember that you can also create ads on the topic you are interested
												in. This way psychologists will be able to contact you via email. (use
												ADD button)
											</p>
										</div>
									</div>
									<div
										className={"tab-pane " + active2}
										id="menu2"
										role="tabpanel"
										aria-labelledby="home-tab">
										<Email
											onClickEmail={() => {
												setState({ showModal: true });
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Modal
						show={state.showModal}
						onClosed={() => setState({ showModal: false })}
						text="Your email has been succesfully send"
						titleModal=""
						confirmation="Go Feed"
						classNameEmail="ButtonBlueModal"
						onSend={() => {
							history.push("/feed");
							actions.setSubjectEmail(null);
						}}
					/>
				</div>
			</>
		);
	}
};
