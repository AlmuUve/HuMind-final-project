import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlGetUserCompany: "https://3001-lavender-mockingbird-2k9elpyx.ws-eu03.gitpod.io/user/company/5",
			userCompany: [],
			urlGetUserPsychologist: "https://3001-lavender-mockingbird-2k9elpyx.ws-eu03.gitpod.io/user/psychologist/4",
			userPsychologist: [],
			User: {},
			LoggedUser: {}
		},

		actions: {
			getUserPsychologist: () => {
				fetch(getStore().urlGetUserPsychologist).then(async res => {
					const response = await res.json();
					setStore({ userPsychologist: [response] });
				});
			},

			getUserCompany: () => {
				fetch(getStore().urlGetUserCompany).then(async res => {
					const response = await res.json();
					setStore({ userCompany: [response] });
				});
			},

			addNewUser: async user => {
				let response = await fetch("https://3001-lavender-mockingbird-2k9elpyx.ws-eu03.gitpod.io/user", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						email: user.email,
						password: user.password,
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
			},

			login: async (email, password) => {
				let response = await fetch("https://3001-lavender-mockingbird-2k9elpyx.ws-eu03.gitpod.io/login", {
					method: "POST",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						email: email,
						password: password
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
				console.log(getStore().LoggedUser, "@@@@2@@@@@@@@@");
			},

			setLoggedUser: (new_email, new_password) => {
				setStore({
					LoggedUser: {
						email: new_email,
						password: new_password
					}
				});
			},

			deleteProfile: async id => {
				let response = await fetch("https://3001-green-condor-domx3gwg.ws-eu03.gitpod.io/user/" + id, {
					method: "PATCH",
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
				console.log("User deleted successfully");
			}
		}
	};
};

export default getState;
