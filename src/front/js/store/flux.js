const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			newUser: {},
			psychologists: []
			companies: []
		},
		actions: {
			addNewUser: (email, password, is_psychologist) => {
				setStore({
					newUser: {
						email: email,
						password: password,
						is_psychologist: is_psychologist
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
			}

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
			}
		}
	};
};

export default getState;
