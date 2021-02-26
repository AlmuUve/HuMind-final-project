const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userCompany: {},
			userPsychologist: {},
			user: {},
			help: null
			// newpsychologists: {},
			// newcompanies: {}
		},

		actions: {
			getUser: () => {
				fetch("https://3001-gold-anaconda-czi4jfzk.ws-eu03.gitpod.io/user/4").then(async res => {
					const response = await res.json();
					setStore({ user: response });
					setStore({ help: response.is_psychologist });
				});
			},

			addNewUser: async user => {
				console.log("esto es una mierdaaaaaa", user);
				let response = await fetch("https://3001-violet-beetle-r3kgoico.ws-eu03.gitpod.io/user", {
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
