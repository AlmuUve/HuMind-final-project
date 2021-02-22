const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlGetUserCompany: "https://3001-chocolate-raccoon-4tzuwjs2.ws-eu03.gitpod.io/user/company/5",
			userCompany: [],
			urlGetUserPsychologist: "https://3001-chocolate-raccoon-4tzuwjs2.ws-eu03.gitpod.io/user/psychologist/4",
			userPsychologist: [],
			newUser: {},
			psychologists: [],
			companies: []
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
			addNewUser: (email, password, is_psychologist) => {
				setStore({
					newUser: {
						email: "hola@gmail.com",
						password: password,
						is_psychologist: true
					}
				});
			},
			addPsychologist: async (
				name,
				lastname,
				identity_number,
				association_number,
				speciality,
				facebook,
				instagram,
				twitter,
				linkedIn,
				youTube,
				description,
				user_id
			) => {
				let response = await fetch("https://3001-chocolate-raccoon-4tzuwjs2.ws-eu03.gitpod.io/user", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						email: getStore().newUser.email,
						password: getStore().newUser.password,
						is_psychologist: getStore().newUser.is_psychologist,
						name: name,
						lastname: lastname,
						identity_number: identity_number,
						association_number: association_number,
						speciality: speciality,
						facebook: facebook,
						instagram: instagram,
						twitter: twitter,
						linkedIn: linkedIn,
						youTube: youTube,
						description: description,
						user_id: user_id
					})
				});
				response = await response.json();
				getActions().addPsychologist();
			},
			addCompany: async (
				company_name,
				company_number,
				facebook,
				instagram,
				twitter,
				linkedIn,
				youTube,
				description,
				user_id
			) => {
				let response = await fetch("https://3001-brown-snipe-snqhxa3v.ws-eu03.gitpod.io/", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						email: getStore().newUser.email,
						password: getStore().newUser.password,
						is_psychologist: getStore().newUser.is_psychologist,
						company_name: company_name,
						company_number: company_number,
						facebook: facebook,
						instagram: instagram,
						twitter: twitter,
						linkedIn: linkedIn,
						youTube: youTube,
						description: description,
						user_id: user_id
					})
				});
				response = await response.json();
				getActions().addCompany();
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
