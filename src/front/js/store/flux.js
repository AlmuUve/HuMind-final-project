import jwt_decode from "jwt-decode";

const pathProfile = "/profile/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			workshop: {},
			workshops: [],
			categories: [],
			allWorkshops: [],
			allSearchWorkshops: [],
			token: "",
			user: {},
			id: null,
			help: null,
			LoggedUser: {},
			password: "",
			email: "",
			psychologistId: "",
			companyId: "",
			userProfile: [],
			pathProfilePsychologist: "",
			pathProfileCompany: ""
		},

		actions: {
			//FUNCTIONS FOR PATHS PROFILE\\

			setpathProfilePsychologist: (newName, newLastname) => {
				setStore({ pathProfilePsychologist: pathProfile.concat(newName, "_", newLastname) });
			},
			setpathProfileCompany: newName => {
				setStore({ pathProfileCompany: pathProfile.concat(newName) });
			},

			//AUX FUNCTIONS\\

			setEmailFlux: new_email => {
				setStore({ email: new_email });
			},
			setPasswordFlux: new_password => {
				setStore({ password: new_password });
			},
			setHelp: is_psychologist => {
				setStore({ help: is_psychologist });
			},

			//CALL API\\

			getWorkshops: () => {
				fetch(
					"https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/psychologist/" +
						getStore().user.user_id +
						"/workshops",
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${localStorage.getItem("token")}`
						}
					}
				).then(async res => {
					const response = await res.json();
					setStore({ workshops: response });
				});
			},

			getOneWorkshop: () => {
				fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/workshop/" + getStore().workshop.id, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				}).then(async res => {
					const response = await res.json();
					setStore({ workshop: response });
					setStore({ categories: response.categories });
				});
			},
			getUser: id => {
				fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/" + id, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				}).then(async res => {
					const response = await res.json();
					setStore({ user: response });
					setStore({ id: response.id });
					response.is_psychologist
						? setStore({ psychologistId: response.id })
						: setStore({ companyId: response.id });
				});
			},

			// getNewUser: async id => {
			// 	let response = await fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/" + id);
			// 	response = await response.json();
			// 	setStore({ user: response });
			// 	setStore({ help: response.is_psychologist });
			// 	setStore({ id: response.id });
			// },

			addNewUser: async user => {
				let response = await fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user", {
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
				await getActions().getUser(response.user_id);
			},

			editUserProfile: async user_info => {
				let response = await fetch(
					"https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/" + getStore().user.user_id,
					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${localStorage.getItem("token")}`
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
				console.log(response);
				setStore({ user: response });
			},

			addNewWorkshop: async workshop => {
				let response = await fetch(
					"https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/psychologist/" + id + "/workshop",
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

			addNewSearchWorkshop: async (searchWorkshop, id) => {
				let response = await fetch(
					"https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/company/" + id + "/searchworkshop",
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
				let response = await fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/login", {
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
				getActions().getUser(getStore().LoggedUser.id);
				getActions().setHelp(getStore().LoggedUser.is_psychologist);
			},

			decode: () => {
				let token = localStorage.getItem("token");
				const decoded = jwt_decode(token);
				getActions().setLoggedUser(decoded.sub.email, decoded.sub.id, decoded.sub.is_psychologist);
			},

			setLoggedUser: (new_email, new_id, new_is_psychologist) => {
				setStore({
					LoggedUser: {
						email: new_email,
						id: new_id,
						is_psychologist: new_is_psychologist
					}
				});
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({
					LoggedUser: {},
					token: ""
				});
			},

			editWorkshop: async workshop => {
				let response = await fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/workshop", {
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
				let response = await fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/search_workshop", {
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
				});
				response = await response.json();
			},

			getAllWorkshops: () => {
				fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/workshops").then(async res => {
					const response = await res.json();
					setStore({ allWorkshops: response });
				});
			},

			getAllSearchWorkshops: () => {
				fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/search_workshops").then(async res => {
					const response = await res.json();
					setStore({ allSearchWorkshops: response });
				});
			},

			deleteProfile: async id => {
				let response = await fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/user/" + id, {
					method: "PATCH",
					headers: new Headers({
						"Content-Type": "application/json",
						Authorization: getStore().token
					})
				});
				response = await response.json();
			},

			deleteSearchWorkshop: async id => {
				let response = await fetch(
					"https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/psychologist/workshop" + id,
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
				let response = await fetch("https://3001-black-bat-eintvalr.ws-eu03.gitpod.io/contact", {
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
