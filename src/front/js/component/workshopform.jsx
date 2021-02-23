import React, { useContext, useState, Fragment, useReducer } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Workshopform = () => {
	const { actions, store } = useContext(Context);
	const [workshop, setWorkshop] = useState({
		title: "",
		category: [],
		duration: "",
		price: "",
		dates: "",
		max_people: "",
		description: ""
	});

	const inputChange = event => {
		setWorkshop({ ...workshop, [event.target.name]: event.target.value });
	};

	//SET THE CATEGORY LIST NEXT 3 FUNCTIONS

	let listOfCategory = [];

	const onCheckBox = event => {
		listOfCategory.push(parseInt(event.target.value));
	};

	const removeDuplicates = arr => {
		const uniques = [];
		arr.forEach(element => {
			if (!uniques.includes(element)) {
				uniques.push(element);
			}
		});
		return uniques;
	};

	const setCategoryWorkshop = arr => {
		setWorkshop((workshop.category = removeDuplicates(arr)));
	};

	return (
		<Fragment>
			<form action="/action_page.php">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<label htmlFor="title">
								<p>Workshop Name</p>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="Max. 50 characters"
								name="title"
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="duration">
								<p>Duration</p>
							</label>
							<input
								type="text"
								onChange={inputChange}
								placeholder="In minutes"
								name="duration"
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="price">
								<p>Price</p>
							</label>
							<input type="text" onChange={inputChange} placeholder="In €" name="price" required />
						</div>
						<div className="col-12">
							<label htmlFor="email">
								<p>Availabre Dates</p>
							</label>
							<input type="text" onChange={inputChange} placeholder="mm/dd/yyyy" name="dates" required />
						</div>
						<div className="col-12">
							<label htmlFor="max_people">
								<p>Maximun participants</p>
							</label>
							<input type="text" onChange={inputChange} name="max_people" required />
						</div>
						<div className="col-12">
							<label htmlFor="description">
								<b>Description</b>
							</label>
							<textarea
								name="description"
								onChange={inputChange}
								placeholder="Max. 500 caracteres"
								form="usrform"
							/>
						</div>
						<label htmlFor="category" className="">
							Select a category
						</label>
						<div className="col-12">
							<input name="category" type="checkbox" value={1} id="category1" onChange={onCheckBox} />
							<label htmlFor="category1">Estres</label>
							<input name="category" type="checkbox" value={2} id="category2" onChange={onCheckBox} />
							<label htmlFor="category2">Ansiedad</label>
							<input name="category" type="checkbox" value={3} id="category1" onChange={onCheckBox} />
							<label htmlFor="category1">Mindfulness</label>
							<input name="category" type="checkbox" value={4} id="category1" onChange={onCheckBox} />
							<label htmlFor="category1">Gestion de equipos</label>
						</div>
					</div>
					<button
						className="submit_button"
						type="submit"
						onClick={e => {
							e.preventDefault();
							setCategoryWorkshop(listOfCategory);
							actions.addNewWorkshop(workshop);
						}}>
						Submit
					</button>
				</div>
			</form>
		</Fragment>
	);
};
