import React, { useContext, useState, Fragment, useReducer } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { YellowButton } from "./yellowButton";

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

	let listOfCategory = [];

	const [price, setPrice] = useState(null);
	const inputPrice = document.querySelector("#price");

	const inputChange = event => {
		setWorkshop({ ...workshop, [event.target.name]: event.target.value });
	};

	//SET THE CATEGORY LIST NEXT 3 FUNCTIONS

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

	//FUNCTIONS TO VALIDATIONS

	const checkPrice = (value, input) => {
		Number(value) && value < 10000 ? isValid(input) : isInvalid(input);
	};

	const isInvalid = input => {
		input.classList.remove("is-valid");
		input.classList.add("is-invalid");
	};

	const isValid = input => {
		input.classList.add("is-valid");
		input.classList.remove("is-invalid");
	};

	return (
		<Fragment>
			<form className="container formAddWorkshop">
				<div className="row">
					<div className="col-12 inputLabel">
						<label htmlFor="title" className="titleInputs">
							<p>Workshop Name</p>
						</label>
						<input
							className="workshopInput"
							type="text"
							onChange={inputChange}
							placeholder="Max. 50 characters"
							name="title"
							id="title"
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-6 inputLabel">
						<label htmlFor="duration" className="titleInputs">
							<p>Duration</p>
						</label>
						<input
							className="workshopInput"
							type="text"
							onChange={inputChange}
							placeholder="In minutes"
							name="duration"
							required
						/>
					</div>
					<div className="col-6 inputLabel">
						<label htmlFor="price" className="titleInputs">
							<p>Price</p>
						</label>
						<input
							className="workshopInput form-control"
							type="text"
							onChange={e => {
								inputChange(e);
								setPrice(e.target.value);
							}}
							placeholder="In €"
							name="price"
							id="price"
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 inputLabel">
						<label htmlFor="dates" className="titleInputs">
							<p>Availabre Dates</p>
						</label>
						<input
							className="workshopInput"
							type="date"
							onChange={inputChange}
							placeholder="mm/dd/yyyy"
							name="dates"
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-sm-12 inputLabel">
						<label htmlFor="max_people" className="titleInputs">
							<p>Maximun participants</p>
						</label>
						<input
							className="workshopInput"
							type="text"
							onChange={inputChange}
							name="max_people"
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 inputLabel">
						<label htmlFor="description" className="titleInputs">
							<p>Description</p>
						</label>
						<textarea
							className="workshopTextArea"
							name="description"
							onChange={inputChange}
							placeholder="Max. 500 caracteres"
							form="usrform"
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 inputLabel">
						<label htmlFor="category" className="titleInputs">
							Select a category
						</label>
						<div className="row mb-3">
							<div className="col-lg-3 col-sm-12 inputLabel">
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={1}
										id="category1"
										onChange={onCheckBox}
									/>
									<label htmlFor="category1" className="ml-3">
										Estres
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={2}
										id="category2"
										onChange={onCheckBox}
									/>
									<label htmlFor="category2" className="ml-3">
										Ansiedad
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={3}
										id="category1"
										onChange={onCheckBox}
									/>
									<label htmlFor="category1" className="ml-3">
										Mindfulness
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={4}
										id="category1"
										onChange={onCheckBox}
									/>
									<label htmlFor="category1" className="ml-3">
										Gestion de equipos
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={5}
										id="category1"
										onChange={onCheckBox}
									/>
									<label htmlFor="category1" className="ml-3">
										Risoterapia
									</label>
								</div>
							</div>
							<div className="col-lg-3 col-sm-12 inputLabel">
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={6}
										id="category1"
										onChange={onCheckBox}
									/>
									<label htmlFor="category1" className="ml-3">
										Sueño
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={7}
										id="category2"
										onChange={onCheckBox}
									/>
									<label htmlFor="category2" className="ml-3">
										Somos la ostia
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={8}
										id="category1"
										onChange={onCheckBox}
									/>
									<label htmlFor="category1" className="ml-3">
										Terminamos mañana
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={9}
										id="category1"
										onChange={onCheckBox}
									/>
									<label htmlFor="category1" className="ml-3">
										Psicologia positiva
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="checkbox"
										value={10}
										id="category1"
										onChange={onCheckBox}
									/>
									<label htmlFor="category1" className="ml-3">
										Gestión del tiempo
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row d-flex justify-content-center mb-5">
					<YellowButton
						type="submit"
						text="Submit"
						onClickAddWorkshop={e => {
							e.preventDefault();
							console.log(price);
							checkPrice(price, inputPrice);
							// setCategoryWorkshop(listOfCategory);
							// actions.addNewWorkshop(workshop);
						}}
					/>
				</div>
			</form>
		</Fragment>
	);
};
