import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, Link, useHistory } from "react-router-dom";
import "../../styles/index.scss";

export const SearchBar = () => {
	const { store, actions } = useContext(Context);
	const [userInput, setUserInput] = useState("");
	const history = useHistory();

	return (
		<div className="input-group ml-auto">
			<input
				id="name"
				onChange={e => {
					e.preventDefault();
					setUserInput(e.target.value);
				}}
				type="text"
				className="form-control search-bar-input"
				placeholder="Search here"
			/>
			<div className="input-group-append search-bar-icon-div">
				<span
					className="input-group-text search-bar-icon"
					onClick={e => {
						e.preventDefault();
						actions.getSearchResults(userInput);
						history.push("/feed");
					}}>
					<i className="fa fa-search fa-lg " />
				</span>
			</div>
		</div>
	);
};
