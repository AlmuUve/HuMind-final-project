import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			// User: {},
			id: null,
			help: null,
			LoggedUser: {},
			password: "",
			email: "",
			idForGetMethod: 39,
			userProfile: []
		},

		actions: {
			setEmailFlux: new_email => {
				setStore({ email: new_email });
			},
			setPasswordFlux: new_password => {
				setStore({ password: new_password });
			},
			getUser: id => {
				fetch("https://3001-turquoise-alpaca-hu9eqoc2.ws-eu03.gitpod.io/user/" + id).then(async res => {
					const response = await res.json();
					setStore({ user: response });
					setStore({ help: response.is_psychologist });
					setStore({ id: response.id });
				});
			},
			getNewUser: async id => {
				let response = await fetch("https://3001-turquoise-alpaca-hu9eqoc2.ws-eu03.gitpod.io/user/" + id);
				response = await response.json();
				setStore({ user: response });
				setStore({ help: response.is_psychologist });
				setStore({ id: response.id });
			},

			addNewUser: async user => {
				let response = await fetch("https://3001-turquoise-alpaca-hu9eqoc2.ws-eu03.gitpod.io/user", {
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
				await getActions().getNewUser(response.user_id);
			},

			editUserProfile: async user_info => {
				let response = await fetch(
					"https://3001-turquoise-alpaca-hu9eqoc2.ws-eu03.gitpod.io/user/" + getStore().user.user_id,
					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: user_info.name,
							name: user_info.name,
							lastname: user_info.lastname,
							identity_number: user_info.identity_number,
							association_number: user_info.association_number,
							speciality: user_info.speciality,
							company_name: user_info.company_name,
							company_number: user_info.company_number,
							facebook: user_info.facebook,
							instagram: user_info.instagram,
							twitter: user_info.twitter,
							linkedIn: user_info.linkedIn,
							youTube: user_info.youTube,
							description: user_info.description,
							is_psychologist: user_info.is_psychologist,
							user_id: user_info.user_id
						})
					}
				);
				response = await response.json();
				setStore({ user: response });
			},

			addNewWorkshop: async workshop => {
				let response = await fetch(
					"https://3001-red-donkey-0pd3shl9.ws-eu03.gitpod.io/user/psychologist/workshop/1",
					{
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
					}
				);
				response = await response.json();
			},

			addNewSearchWorkshop: async searchWorkshop => {
				let response = await fetch(
					"https://3001-red-donkey-0pd3shl9.ws-eu03.gitpod.io/user/company/searchworkshop/2",
					{
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
					}
				);
				response = await response.json();
			},

			login: async (email, password) => {
				console.log(email, "wwwwwwwwwwwwwwwwwwwww");
				let response = await fetch("https://3001-turquoise-alpaca-hu9eqoc2.ws-eu03.gitpod.io/login", {
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

			setLoggedUser: (new_email, new_id) => {
				setStore({
					LoggedUser: {
						email: new_email,
						id: new_id
					}
				});
			},

			editWorkshop: async workshop => {
				let response = await fetch("https://3001-red-donkey-0pd3shl9.ws-eu03.gitpod.io/user/workshop/1", {
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
					"https://3001-red-donkey-0pd3shl9.ws-eu03.gitpod.io/user/search_workshop/1",
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
				let response = await fetch("https://3001-red-donkey-0pd3shl9.ws-eu03.gitpod.io/user/" + id, {
					method: "PATCH",
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
			},

			deleteSearchWorkshop: async id => {
				let response = await fetch(
					"https://3001-red-donkey-0pd3shl9.ws-eu03.gitpod.io/psychologist/workshop" + id,
					{
						method: "DELETE",
						headers: new Headers({
							"Content-Type": "application/json"
						})
					}
				);
				response = await response.json();
			}
		}
	};
};

export default getState;
