const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlGetUserCompany: "https://3001-chocolate-raccoon-4tzuwjs2.ws-eu03.gitpod.io/user/company/5",
			userCompany: [],
			urlGetUserPsychologist: "https://3001-chocolate-raccoon-4tzuwjs2.ws-eu03.gitpod.io/user/psychologist/4",
			userPsychologist: [],
			User: {}
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
				console.log("esto es una mierdaaaaaa", user);
				let response = await fetch("https://3001-chocolate-vole-x619y5hf.ws-eu03.gitpod.io/user", {
					method: "POST",
					mode: "cors",
					redirect: "follow",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify({
						email: user.email,
						password: "2437643756",
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
			// addCompany: async (
			// 	company_name,
			// 	company_number,
			// 	facebook,
			// 	instagram,
			// 	twitter,
			// 	linkedIn,
			// 	youTube,
			// 	description,
			// 	user_id
			// ) => {
			// 	let response = await fetch("https://3001-brown-snipe-snqhxa3v.ws-eu03.gitpod.io/", {
			// 		method: "POST",
			// 		mode: "cors",
			// 		redirect: "follow",
			// 		headers: new Headers({
			// 			"Content-Type": "application/json"
			// 		}),
			// 		body: JSON.stringify({
			// 			email: getStore().newUser.email,
			// 			password: getStore().newUser.password,
			// 			is_psychologist: getStore().newUser.is_psychologist,
			// 			company_name: company_name,
			// 			company_number: company_number,
			// 			facebook: facebook,
			// 			instagram: instagram,
			// 			twitter: twitter,
			// 			linkedIn: linkedIn,
			// 			youTube: youTube,
			// 			description: description,
			// 			user_id: user_id
			// 		})
			// 	});
			// 	response = await response.json();
			// 	getActions().addCompany();
			// },
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
