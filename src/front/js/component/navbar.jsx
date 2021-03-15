import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav, DropdownButton, Dropdown, Button } from "react-bootstrap";
import "../../styles/index.scss";
import { NavbarButtons } from "./navbarbuttons.jsx";
import { SearchBar } from "../component/searchBar";
import { Modaldelete } from "./modaldelete.jsx";

export const Navbarpage = props => {
	const [navbarAvatar, setNavbarAvatar] = useState("");
	const { store, actions } = useContext(Context);
	const [navbar, setNavbar] = useState();
	const [state, setState] = useState({
		showModal: false
	});

	const history = useHistory();

	const navbarLogOut = (
		<Nav className="ml-auto">
			<a href="#anchor" className="buttonNavbar">
				<NavbarButtons text="What do we do?" />
			</a>
			<a href="#anchorCompanies" className="buttonNavbar">
				<NavbarButtons text="Companies" />
			</a>
			<a href="#anchorPsychologists" className="buttonNavbar">
				<NavbarButtons text="Psychologists" />
			</a>
			<Link to="/signup" className="buttonNavbar">
				<NavbarButtons text="Sign Up" />
			</Link>
			<Link to="/login" className="buttonNavbar">
				<NavbarButtons text="Log In" />
			</Link>
		</Nav>
	);

	const navbarLog = (
		<Nav className="ml-auto">
			<SearchBar />
			<DropdownButton
				id="dropdown-item-button"
				title={<img className="navbarAvatarButton rounded-circle" src={navbarAvatar} />}
				className="ml-2 dropButton"
				menuAlign="right">
				<Dropdown.ItemText className="buttonDropDown">
					<NavbarButtons
						text="Profile"
						onClickNavbar={() => {
							history.push(
								store.LoggedUser.is_psychologist
									? "/profile/" +
											store.LoggedUser.name.replace(" ", "_") +
											"_" +
											store.LoggedUser.lastname.replace(" ", "_")
									: "/profile/" + store.LoggedUser.company_name.replace(" ", "_")
							);
							actions.setUser(null);
							localStorage.removeItem("userVisited");
						}}
					/>
				</Dropdown.ItemText>
				<Link to="/feed">
					<Dropdown.ItemText className="buttonDropDown">
						<NavbarButtons
							text="Feed"
							onClickNavbar={() => {
								actions.getAllSearchWorkshops();
								actions.getAllWorkshops();
								actions.setUser(null);
							}}
						/>
					</Dropdown.ItemText>
				</Link>
				<Link to="/">
					<Dropdown.ItemText className="buttonDropDown">
						<NavbarButtons
							text="Log Out"
							onClickNavbar={() => {
								actions.logout();
								actions.setUser(null);
								setNavbar(
									<Nav className="ml-auto">
										<a href="#ancla1" className="buttonNavbar">
											<NavbarButtons text="What do we do?" />
										</a>
										<a href="#anclaCompanies" className="buttonNavbar">
											<NavbarButtons text="Companies" />
										</a>
										<a href="#anclaPsychologists" className="buttonNavbar">
											<NavbarButtons text="Psychologist" />
										</a>
										<Link to="/signup" className="buttonNavbar">
											<NavbarButtons text="Sign Up" />
										</Link>
										<Link to="/login" className="buttonNavbar">
											<NavbarButtons text="Log In" />
										</Link>
									</Nav>
								);
							}}
						/>
					</Dropdown.ItemText>
				</Link>
				<Dropdown.ItemText className="buttonDropDownDelete">
					<NavbarButtons
						text="Danger Zone"
						onClickNavbar={() => {
							setState({ showModal: true });
						}}
					/>
				</Dropdown.ItemText>
			</DropdownButton>
		</Nav>
	);

	useEffect(() => {
		store.LoggedUser.id > 0 ? setNavbar(navbarLog) : setNavbar(navbarLogOut);
	}, [store.LoggedUser]);

	useEffect(() => {
		if (store.LoggedUser.is_psychologist) {
			if (store.LoggedUser.id == 1) {
				setNavbarAvatar(
					"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
				);
			} else if (store.LoggedUser.id == 2) {
				setNavbarAvatar(
					"https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
				);
			} else if (store.LoggedUser.id == 3) {
				setNavbarAvatar(
					"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg"
				);
			} else {
				setNavbarAvatar(
					"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
				);
			}
		}
	}, [store.LoggedUser]);

	useEffect(() => {
		if (store.LoggedUser.is_psychologist == false) {
			if (store.LoggedUser.id == 1) {
				setNavbarAvatar("https://assets.breatheco.de/apis/img/icon/4geeks.png");
			} else if (store.LoggedUser.id == 2) {
				setNavbarAvatar("https://talenthackers.s3.amazonaws.com/media/square-talenthackers.png");
			} else if (store.LoggedUser.id == 3) {
				setNavbarAvatar(
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWSMfzARBIUA3oobW0k9WNZW6ifFck41q0OaWBFMwhh59AZg5niIQzkrwc56_6oVLFSE&usqp=CAU"
				);
			} else {
				setNavbarAvatar(
					"https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg"
				);
			}
		}
	}, [store.LoggedUser]);

	return (
		<>
			<div className="container-fluid fixed-top">
				<Navbar className="col-12" expand="lg">
					<Container>
						<Link to="/">
							<Navbar.Brand>
								<h1 width="130" height="50" className="d-inline-block align-top navbarLogo">
									HUMIND
								</h1>
							</Navbar.Brand>
						</Link>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">{navbar}</Navbar.Collapse>
					</Container>
					<Modaldelete
						show={state.showModal}
						text="You are very close to leave the colest platform in the world"
						getMeBack="GO BACK"
						titleModal="Be careful! You may not be able to get back in."
						confirmation="DO IT!"
						classNameEmail="ButtonBlue"
						classNameBack="ButtonBlueModal"
						onClickDelete={() => {
							setState({ showModal: false });
							actions.deleteProfile(store.LoggedUser.user_id);
							history.push("/");
						}}
						onClosed={() => setState({ showModal: false })}
					/>
				</Navbar>
			</div>
		</>
	);
};
