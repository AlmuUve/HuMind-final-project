import React, { Component } from "react";
import { YellowButton } from "./yellowButton";
import { DeleteButton } from "./deleteButton";
import { EditButton } from "./editButton";

export const WorkshopCard = () => (
	<div className="workshopCard">
		<div className="cardInformation">
			<p className="workshopTitle">Stress Management</p>
			<div className="details">
				<span className="date">01/01/2020</span>
				<span className="pax">10 pax</span>
				<span className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo molestie aliquam. Donec
					rutrum condimentum purus, sit amet porttitor metus efficitur in. Etiam dictum luctus lacus sit amet
					vehicula.
				</span>
			</div>
		</div>
		<div className="buttons_workshopCard">
			<div className="deleteAndEditButtons">
				<EditButton className="editButton_workshopCard" />
				<DeleteButton className="deleteButton_workshopCard" />
			</div>
			<YellowButton className="yellowButton_workshopCard" />
		</div>
	</div>
);
