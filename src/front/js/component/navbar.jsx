import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, DropdownButton, Dropdown, Button } from "react-bootstrap";
import "../../styles/index.scss";
import { NavbarButtons } from "./navbarbuttons.jsx";

export const Navbarpage = props => {
	const [navbarAvatar, setNavbarAvatar] = useState("");
	const { store, actions } = useContext(Context);
	const [navbar, setNavbar] = useState(
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

	const navbarLog = (
		<Nav className="ml-auto">
			<DropdownButton
				id="dropdown-item-button"
				title={<img className="navbarAvatarButton" src={navbarAvatar} />}
				className="ml-2 dropButton"
				menuAlign="right">
				<Link to={"/profile/" + store.user.name + "_" + store.user.lastname}>
					<Dropdown.ItemText className="buttonDropDown">
						<NavbarButtons text="Profile" />
					</Dropdown.ItemText>
				</Link>
				<Link to="/feed">
					<Dropdown.ItemText className="buttonDropDown">
						<NavbarButtons
							text="Feed"
							onClickNavbar={() => {
								actions.getAllSearchWorkshops();
								actions.getAllWorkshops();
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
								actions.setId(null);
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
			</DropdownButton>
		</Nav>
	);

	useEffect(() => {
		if (store.id != null) {
			setNavbar(navbarLog);
		}
		if (store.help) {
			setNavbarAvatar(
				"https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
			);
		} else {
			setNavbarAvatar(
				"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
			);
		}
	}, [store.id, store.help]);

	return (
		<>
			<div className="container-fluid">
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
				</Navbar>
			</div>
		</>
	);
};
