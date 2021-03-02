import React, { useContext, useState, Fragment, useReducer } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { YellowButton } from "./yellowButton";

export const Searchworkshopform = () => {
	const { actions, store } = useContext(Context);
	const [searchWorkshop, setSearchWorkshop] = useState({
		category: "",
		duration: "",
		price: "",
		date: "",
		max_people: ""
	});

	const [duration, setDuration] = useState(null);
	const inputDuration = document.querySelector("#duration");

	const [price, setPrice] = useState(null);
	const inputPrice = document.querySelector("#price");

	const [dates, setDates] = useState(null);
	const inputDates = document.querySelector("#dates");

	const [people, setPeople] = useState(null);
	const inputPeople = document.querySelector("#people");

	const [showError, setShowError] = useState("notShow");

	//**SETEAR EL OBJETO**\\

	const inputChange = event => {
		setSearchWorkshop({ ...searchWorkshop, [event.target.name]: event.target.value });
	};

	//**FUNCTIONS FOR VALIDATIONS**\\

	let isInvalidList = [];

	const checkInputs = e => {
		e.preventDefault();
		checkDuration(duration, inputDuration);
		checkDates(dates, inputDates);
		checkPrice(price, inputPrice);
		checkPeople(people, inputPeople);

		if (isInvalidList.length > 0) {
			setShowError("showError");
		} else {
			setShowError("notShow");
			actions.addNewSearchWorkshop(searchWorkshop);
		}
	};

	const checkDuration = (value, input) => {
		if (isNumber(value) && value > 0) {
			isValid(input);
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	const checkPrice = (value, input) => {
		if (Number(value) && value < 10000) {
			isValid(input);
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	const checkDates = (value, input) => {
		if (value != 0) {
			isValid(input);
		} else {
			isInvalid(input);
			isInvalidList.push(value);
		}
	};

	const checkPeople = (value, input) => {
		if (isNumber(value) && value > 0) {
			isValid(input);
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
					<div className="col-lg-6 col-sm-12 inputLabel">
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
							required
						/>
					</div>
					<div className="col-lg-6 col-sm-12 inputLabel">
						<label htmlFor="price" className="titleInputs">
							<p>Max Price</p>
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
					<div className="col-lg-6 col-sm-12 inputLabel">
						<label htmlFor="dates" className="titleInputs">
							<p>Desirable Dates</p>
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
							required
						/>
					</div>
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
							required
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 inputLabel">
						<label htmlFor="category" className="titleInputs" id="categories">
							Select a category
						</label>
						<div className="row mb-3">
							<div className="col-lg-3 col-sm-12 inputLabel">
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={1}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Estres
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={2}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category2" className="ml-3">
										Ansiedad
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={3}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Mindfulness
									</label>
								</div>
							</div>
							<div className="col-lg-3 col-sm-12 inputLabel">
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={4}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Gestion de equipos
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={5}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Risoterapia
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={6}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Sueño
									</label>
								</div>
							</div>
							<div className="col-lg-3 col-sm-12 inputLabel">
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={7}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category2" className="ml-3">
										Somos la ostia
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={8}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Terminamos mañana
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={9}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Psicologia positiva
									</label>
								</div>
							</div>
							<div className="col-lg-3 col-sm-12 inputLabel">
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={10}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Gestión del tiempo
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={11}
										id="category"
										onClick={inputChange}
									/>
									<label htmlFor="category1" className="ml-3">
										Gestión del tiempo
									</label>
								</div>
								<div>
									<input
										className="workshopCheckBox"
										name="category"
										type="radio"
										value={12}
										id="category"
										onClick={inputChange}
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
							checkInputs(e);
						}}
					/>
				</div>
			</form>
		</Fragment>
	);
};
