import jwt_decode from "jwt-decode";

const pathProfile = "/profile/";
const url = "https://3001-blue-slug-9o5zbg5q.ws-eu03.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			workshop: {},
			workshops: [],
			searchWorkshops: [],
			categories: [],
			allWorkshops: [],
			allSearchWorkshops: [],
			token: "",
			user: null,
			LoggedUser: {},
			password: "",
			email: "",
			pathProfilePsychologist: "",
			pathProfileCompany: "",
			currentWorkshop: ""
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
			setId: new_id => {
				setStore({ id: new_id });
			},
			setCurrentWorkshop: newContact => {
				setStore({ currentWorkshop: newContact });
			},

			setUser: newUser => {
				setStore({ user: newUser });
			},

			//CALL API\\

			getWorkshops: id => {
				fetch(url + "/psychologist/" + id + "/workshops", {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				}).then(async res => {
					const response = await res.json();
					setStore({ workshops: response });
				});
			},

			getOneWorkshop: () => {
				fetch(url + "/workshop/" + getStore().workshop.id, {
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

			getSearchWorkshops: id => {
				fetch(url + "/company/" + id + "/workshops", {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				}).then(async res => {
					const response = await res.json();
					setStore({ searchWorkshops: response });
				});
			},

			getUser: id => {
				fetch(url + "/user/" + id, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				}).then(async res => {
					const response = await res.json();
					setStore({ user: response });
				});
			},

			addNewUser: async user => {
				let response = await fetch(url + "/user", {
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
				await getActions().login(user.email, user.password);
			},

			editUserProfile: async (user_info, id) => {
				let response = await fetch(url + "/user/" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: JSON.stringify({
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
				});
				response = await response.json();
				setStore({ LoggedUser: response });
			},

			addNewWorkshop: async (workshop, id) => {
				let response = await fetch(url + "/psychologist/" + id + "/workshop", {
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
				getActions().getWorkshops(getStore().LoggedUser.id);
				getActions().getAllWorkshops();
			},

			addNewSearchWorkshop: async (searchWorkshop, id) => {
				let response = await fetch(url + "/company/" + id + "/searchworkshop", {
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
				getActions().getSearchWorkshops(getStore().LoggedUser.id);
				getActions().getAllSearchWorkshops();
			},

			login: async (email, password) => {
				let response = await fetch(url + "/login", {
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
				if (getStore().LoggedUser.is_psychologist) {
					getActions().setpathProfilePsychologist(
						getStore().LoggedUser.name.replace(" ", "_"),
						getStore().LoggedUser.lastname.replace(" ", "_")
					);
					getActions().getWorkshops(getStore().LoggedUser.id);
				} else {
					getActions().setpathProfileCompany(getStore().LoggedUser.company_name.replace(" ", "_"));
					getActions().getSearchWorkshops(getStore().LoggedUser.id);
				}
			},

			decode: () => {
				let token = localStorage.getItem("token");
				const decoded = jwt_decode(token);
				decoded.sub.is_psychologist
					? getActions().setPsyLogged(
							decoded.sub.email,
							decoded.sub.id,
							decoded.sub.is_psychologist,
							decoded.sub.description,
							decoded.sub.facebook,
							decoded.sub.instagram,
							decoded.sub.twitter,
							decoded.sub.linkedIn,
							decoded.sub.youTube,
							decoded.sub.name,
							decoded.sub.lastname,
							decoded.sub.identity_number,
							decoded.sub.association_number,
							decoded.sub.speciality,
							decoded.sub.user_id
					  )
					: getActions().setCompanyLogged(
							decoded.sub.email,
							decoded.sub.id,
							decoded.sub.is_psychologist,
							decoded.sub.description,
							decoded.sub.facebook,
							decoded.sub.instagram,
							decoded.sub.twitter,
							decoded.sub.linkedIn,
							decoded.sub.youTube,
							decoded.sub.user_id,
							decoded.sub.company_name,
							decoded.sub.company_number
					  );
				getActions().getAllWorkshops();
				getActions().getAllSearchWorkshops();
			},

			setPsyLogged: (
				new_email,
				new_id,
				new_is_psychologist,
				new_description,
				new_facebook,
				new_instagram,
				new_twitter,
				new_linkedIn,
				new_youTube,
				new_name,
				new_lastname,
				new_identity_number,
				new_association_number,
				new_speciality,
				new_user_id
			) => {
				setStore({
					LoggedUser: {
						email: new_email,
						id: new_id,
						is_psychologist: new_is_psychologist,
						description: new_description,
						facebook: new_facebook,
						instagram: new_instagram,
						twitter: new_twitter,
						linkedIn: new_linkedIn,
						youTube: new_youTube,
						name: new_name,
						lastname: new_lastname,
						identity_number: new_identity_number,
						association_number: new_association_number,
						speciality: new_speciality,
						user_id: new_user_id
					}
				});
			},

			setCompanyLogged: (
				new_email,
				new_id,
				new_is_psychologist,
				new_description,
				new_facebook,
				new_instagram,
				new_twitter,
				new_linkedIn,
				new_youTube,
				new_user_id,
				new_company_name,
				new_company_number
			) => {
				setStore({
					LoggedUser: {
						email: new_email,
						id: new_id,
						is_psychologist: new_is_psychologist,
						description: new_description,
						facebook: new_facebook,
						instagram: new_instagram,
						twitter: new_twitter,
						linkedIn: new_linkedIn,
						youTube: new_youTube,
						user_id: new_user_id,
						company_name: new_company_name,
						company_number: new_company_number
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

			editWorkshop: async (workshop, idPsy, id) => {
				let response = await fetch(url + "/psychologist/" + idPsy + "/workshop/" + id, {
					method: "PUT",
					body: JSON.stringify({
						title: workshop.title,
						duration: workshop.duration,
						price: workshop.price,
						date: workshop.date,
						max_people: workshop.max_people,
						description: workshop.description,
						category_info: workshop.category
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				response = await response.json();
				getActions().getWorkshops(getStore().LoggedUser.id);
				getActions().getAllWorkshops();
			},

			editSearchWorkshop: async (search_workshop, idCom, id) => {
				let response = await fetch(url + "/company/" + idCom + "/search_workshop/" + id, {
					method: "PUT",
					body: JSON.stringify({
						duration: search_workshop.duration,
						price: search_workshop.price,
						date: search_workshop.date,
						max_people: search_workshop.max_people,
						category_id: search_workshop.category
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				response = await response.json();
				getActions().getSearchWorkshops(getStore().LoggedUser.id);
				getActions().getAllSearchWorkshops();
			},

			getAllWorkshops: () => {
				fetch(url + "/workshops").then(async res => {
					const response = await res.json();
					setStore({ allWorkshops: response });
				});
			},

			getAllSearchWorkshops: () => {
				fetch(url + "/search_workshops").then(async res => {
					const response = await res.json();
					setStore({ allSearchWorkshops: response });
				});
			},

			deleteProfile: async id => {
				let response = await fetch(url + "/user/" + id, {
					method: "DELETE",
					headers: new Headers({
						"Content-Type": "application/json",
						Authorization: getStore().token
					})
				});
				response = await response.json();
			},

			deleteWorkshop: async (workshop, idPsy) => {
				setStore({ workshops: getStore().workshops.filter(index => index !== workshop) });
				let response = await fetch(url + "/psychologist/" + idPsy + "/workshop/" + workshop.id, {
					method: "DELETE",
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
			},

			deleteSearchWorkshop: async (searchWorkshop, idCom) => {
				setStore({ searchWorkshops: getStore().searchWorkshops.filter(index => index !== searchWorkshop) });
				let response = await fetch(url + "/company/" + idCom + "/workshop/" + searchWorkshop.id, {
					method: "DELETE",
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
			},

			sendEmail: async email => {
				let response = await fetch(url + "/contact", {
					method: "PUT",
					body: JSON.stringify({
						email_from: email.email_from,
						email_to: getStore().user.email,
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
