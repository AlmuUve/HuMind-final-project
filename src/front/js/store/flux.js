import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			workshop: {},
			workshops: [],
			categories: [],
			user: {},
			id: null,
			help: null,
			LoggedUser: {},
			password: "",
			email: "",
			idForGetMethod: 39
		},

		actions: {
			getWorkshops: () => {
				fetch("https://humind.herokuapp.com/user/psychologist/1/workshops").then(
					async res => {
						const response = await res.json();
						setStore({ workshops: response });
					}
				);
			},

			getOneWorkshop: () => {
				fetch("https://humind.herokuapp.com/workshop/1").then(async res => {
					const response = await res.json();
					setStore({ workshop: response });
					setStore({ categories: response.categories });
				});
			},

			setEmailFlux: new_email => {
				setStore({ email: new_email });
			},

			setPasswordFlux: new_password => {
				setStore({ password: new_password });
			},

			getUser: id => {
				fetch("https://humind.herokuapp.com/user/" + id).then(async res => {
					const response = await res.json();
					setStore({ user: response });
					setStore({ help: response.is_psychologist });
					setStore({ id: response.id });
				});
			},

			addNewUser: async user => {
				let response = await fetch("https://humind.herokuapp.com/user", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						email: user.email,
						_password: user.password,
						is_psychologist: user.is_psychologist,
						name: user.name,
						lastname: user.lastname,
						identity_number: user.identity_number,
						association_number: user.association_number,
						speciality: user.speciality,
						company_name: user.company_name,
						company_number: user.company_number,
						facebook: user.facebook,
						instagram: user.instagram,
						twitter: user.twitter,
						linkedIn: user.linkedIn,
						youTube: user.youTube,
						description: user.description
					})
				});
				response = await response.json();
				getActions().getUser(response.user_id);
			},

			addNewWorkshop: async workshop => {
				let response = await fetch("https://humind.herokuapp.com/user/psychologist/workshop/1", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						title: workshop.title,
						category_info: workshop.category,
						duration: workshop.duration,
						price: workshop.price,
						date: workshop.date,
						max_people: workshop.max_people,
						description: workshop.description
					})
				});
				response = await response.json();
			},

			addNewSearchWorkshop: async searchWorkshop => {
				let response = await fetch("https://humind.herokuapp.com/user/company/searchworkshop/2", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						category_id: parseInt(searchWorkshop.category),
						duration: searchWorkshop.duration,
						price: searchWorkshop.price,
						date: searchWorkshop.date,
						max_people: searchWorkshop.max_people
					})
				});
				response = await response.json();
			},

			login: async (email, password) => {
				let response = await fetch("https://humind.herokuapp.com/login", {
					method: "POST",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						email: email,
						_password: password
					})
				});
				let token = await response.json();
				localStorage.setItem("token", token.token);
				getActions().decode();
			},

			decode: () => {
				let token = localStorage.getItem("token");
				const decoded = jwt_decode(token);
				getActions().setLoggedUser(decoded.sub.email, decoded.sub.id);
			},

			setLoggedUser: (new_email, new_password) => {
				setStore({
					LoggedUser: {
						email: new_email,
						password: new_password
					}
				});
			},

			editWorkshop: async workshop => {
				let response = await fetch("https://humind.herokuapp.com/user/workshop/1", {
					method: "PUT",
					body: JSON.stringify({
						title: workshop.title,
						duration: workshop.duration,
						price: workshop.price,
						date: workshop.date,
						max_people: workshop.max_people,
						description: workshop.description,
						category_info: workshop.category_info
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				response = await response.json();
			},

			editSearchWorkshop: async search_workshop => {
				let response = await fetch(
					"https://humind.herokuapp.com/user/search_workshop/1",
					{
						method: "PUT",
						body: JSON.stringify({
							duration: search_workshop.duration,
							price: search_workshop.price,
							date: search_workshop.date,
							max_people: search_workshop.max_people,
							category_id: search_workshop.category_id
						}),
						headers: {
							"Content-Type": "application/json"
						}
					}
				);
				response = await response.json();
			},

			deleteProfile: async id => {
				let response = await fetch("https://humind.herokuapp.com/user/" + id, {
					method: "PATCH",
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
			},

			deleteSearchWorkshop: async id => {
				let response = await fetch(
					"https://humind.herokuapp.com/psychologist/workshop" + id,
					{
						method: "DELETE",
						headers: new Headers({
							"Content-Type": "application/json"
						})
					}
				);
				response = await response.json();
			},

			sendEmail: async email => {
				let response = await fetch("https://humind.herokuapp.com/contact", {
					method: "PUT",
					body: JSON.stringify({
						email_from: email.email_from,
						email_to: email.email_to,
						subject: email.subject,
						message: email.message
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				response = await response.json();
			}
		}
	};
};

export default getState;
