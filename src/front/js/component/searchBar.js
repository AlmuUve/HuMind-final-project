import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, Link, useHistory } from "react-router-dom";
import "../../styles/index.scss";

export const SearchBar = () => {
	const { store, actions } = useContext(Context);
	const [userInput, setUserInput] = useState("");
	const history = useHistory();

	let param = useParams;
	let myInput = document.querySelector("#title");
	let newSearch = async e => {
		// setUserInput(e.target.value);
		if (e.key == "Enter") {
			console.log("holaaaa", userInput);
			console.log("target", e.target.value);
			await actions.getSearchResults(userInput);
			await history.push("/feed");
		}
	};

	return (
		<div className="input-group  searchBarDiv">
			<input
				id="name"
				onKeyPress={e => {
					newSearch(e);
				}}
				onChange={e => {
					setUserInput(e.target.value);
				}}
				type="text"
				className="form-control searchBarInput"
				placeholder="Search here"
			/>
			<div
				className="input-group-append searchBarIconDiv"
				onClick={() => {
					actions.getSearchResults(userInput);
					history.push("/feed");
				}}>
				<span className="input-group-text searchBarIcon">
					<i className="fa fa-search fa-lg " />
				</span>
			</div>
		</div>
	);
};
