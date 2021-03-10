import React, { useContext, useState, Fragment, useReducer } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { YellowButton } from "./yellowButton";

export const Workshopform = () => {
	const { actions, store } = useContext(Context);
	const [workshop, setWorkshop] = useState({
		title: store.currentWorkshop.title,
		category: store.currentWorkshop.categories,
		duration: store.currentWorkshop.duration,
		price: store.currentWorkshop.price,
		date: store.currentWorkshop.date,
		max_people: store.currentWorkshop.max_people,
		description: store.currentWorkshop.description
	});

	const param = useParams();
	const history = useHistory();

	const [title, setTitle] = useState(null);
	const inputTitle = document.querySelector("#title");

	const [duration, setDuration] = useState(null);
	const inputDuration = document.querySelector("#duration");

	const [price, setPrice] = useState(null);
	const inputPrice = document.querySelector("#price");

	const [dates, setDates] = useState(null);
	const inputDates = document.querySelector("#dates");

	const [people, setPeople] = useState(null);
	const inputPeople = document.querySelector("#people");

	const [description, setDescription] = useState(null);
	const inputDescription = document.querySelector("#description");

	const [showError, setShowError] = useState("notShow");

	//**SETEAR EL OBJETO**\\

	const inputChange = event => {
		setWorkshop({ ...workshop, [event.target.name]: event.target.value });
	};

	//**FUNCTIONS FOR VALIDATIONS**\\

	let isInvalidList = [];

	const edit = e => {
		e.preventDefault();
		checkBoxes();
		actions.editWorkshop(workshop, param.id);
	};

	const checkInputs = e => {
		e.preventDefault(e);
		checkTitle(title, inputTitle);
		checkDuration(duration, inputDuration);
		checkDates(dates, inputDates);
		checkPrice(price, inputPrice);
		checkPeople(people, inputPeople);
		checkDescription(description, inputDescription);

		if (isInvalidList.length > 0) {
			setShowError("showError");
		} else {
			setShowError("notShow");
			checkBoxes();
			actions.addNewWorkshop(workshop, store.LoggedUser.id);
		}
	};

	const checkBoxes = () => {
		let boxes = document.querySelectorAll("#category");
		let listOfCategorys = [];
		for (let i = 0; i < boxes.length; i++) {
			if (boxes[i].checked) {
				listOfCategorys.push(parseInt(boxes[i].value));
			}
		}
		setWorkshop((workshop.category = listOfCategorys));
	};

	const checkTitle = (value, input) => {
		if (value != null) {
			if (value.length > 0) {
				isValid(input);
			}
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	const checkDuration = (value, input) => {
		if (value != null) {
			if (isNumber(value) && value > 0) {
				isValid(input);
			}
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	const checkPrice = (value, input) => {
		if (value != null) {
			if (Number(value) && value < 10000) {
				isValid(input);
			}
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	const checkDates = (value, input) => {
		if (value != null) {
			if (value != 0) {
				isValid(input);
			}
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	const checkPeople = (value, input) => {
		if (value != null) {
			if (isNumber(value) && value > 0) {
				isValid(input);
			}
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	const checkDescription = (value, input) => {
		if (value != null) {
			if (value.length > 0 && value.length < 1500) {
				isValid(input);
			}
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	//**AUX FUNCTIONS**\\

	const isNumber = value => {
		return Number(value) % 1 == 0;
	};

	const isInvalid = input => {
		if (input != null) {
			input.classList.remove("is-valid");
			input.classList.add("is-invalid");
		}
	};

	const isValid = input => {
		if (input != null) {
			input.classList.add("is-valid");
			input.classList.remove("is-invalid");
		}
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
							className="workshopInput form-control"
							type="text"
							onChange={e => {
								inputChange(e);
								setTitle(e.target.value);
							}}
							placeholder="Max. 50 characters"
							name="title"
							id="title"
							defaultValue={store.currentWorkshop ? store.currentWorkshop.title : ""}
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
							className="workshopInput form-control"
							type="text"
							onChange={e => {
								inputChange(e);
								setDuration(e.target.value);
							}}
							placeholder="In minutes"
							name="duration"
							id="duration"
							defaultValue={store.currentWorkshop ? store.currentWorkshop.duration : ""}
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
							defaultValue={store.currentWorkshop ? store.currentWorkshop.price : ""}
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
							className="workshopInput form-control"
							type="date"
							onChange={e => {
								inputChange(e);
								setDates(e.target.value);
							}}
							name="date"
							id="dates"
							defaultValue={store.currentWorkshop ? store.currentWorkshop.date : ""}
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
							className="workshopInput form-control"
							type="text"
							onChange={e => {
								inputChange(e);
								setPeople(e.target.value);
							}}
							name="max_people"
							id="people"
							defaultValue={store.currentWorkshop ? store.currentWorkshop.max_people : ""}
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
							className="workshopTextArea form-control"
							name="description"
							onChange={e => {
								inputChange(e);
								setDescription(e.target.value);
							}}
							placeholder="Max. 500 caracteres"
							form="usrform"
							id="description"
							defaultValue={store.currentWorkshop ? store.currentWorkshop.description : ""}
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
										id="category"
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
										id="category"
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
										id="category"
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
										id="category"
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
										id="category"
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
										id="category"
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
										id="category"
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
										id="category"
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
										id="category"
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
										id="category"
									/>
									<label htmlFor="category1" className="ml-3">
										Gestión del tiempo
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<span className={showError}>All fields are mandatory!</span>
				</div>
				<div className="row d-flex justify-content-center mb-5">
					<YellowButton
						type="submit"
						text="Submit"
						onClickForm={e => {
							if (store.currentWorkshop) {
								edit(e);
								actions.setCurrentWorkshop("");
							} else {
								checkInputs(e);
							}
							history.push(
								"/profile/" +
									store.LoggedUser.name.replace(" ", "_") +
									"_" +
									store.LoggedUser.lastname.replace(" ", "_")
							);
						}}
					/>
				</div>
			</form>
		</Fragment>
	);
};
