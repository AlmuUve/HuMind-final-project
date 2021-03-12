import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const Modaldelete = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content ">
					<div className="modal-header modalHeader">
						<h5 className="modal-title modalTitle ">{props.titleModal}</h5>
						{props.onClosed ? (
							<button
								onClick={() => props.onClosed()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body d-flex justify-content-center modalContent">
						<p>{props.text}</p>
					</div>
					<div className="modal-footer modalFooter">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button
							type="button"
							className={props.classNameEmail}
							data-dismiss="modal"
							onClick={() => {
								props.onClosed();
								actions.deleteProfile(store.LoggedUser.user_id);
								history.push("/");
							}}>
							{props.confirmation}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modaldelete.propTypes = {
	history: PropTypes.object,
	onClosed: PropTypes.func,
	show: PropTypes.bool,
	text: PropTypes.string,
	titleModal: PropTypes.string,
	confirmation: PropTypes.string,
	classNameEmail: PropTypes.string
};
