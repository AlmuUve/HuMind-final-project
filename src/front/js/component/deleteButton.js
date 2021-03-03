import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const DeleteButton = () => {
	const { actions, store } = useContext(Context);

	return (
		<button
			className="deleteButton"
			onClick={e => {
				e.preventDefault();
				actions.deleteSearchWorkshop(id);
			}}>
			<i className="far fa-trash-alt deleteButton" />
		</button>
	);
};
