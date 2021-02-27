const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlGetUserCompany: "https://3001-chocolate-raccoon-4tzuwjs2.ws-eu03.gitpod.io/user/company/5",
			userCompany: [],
			urlGetUserPsychologist: "https://3001-chocolate-raccoon-4tzuwjs2.ws-eu03.gitpod.io/user/psychologist/4",
			userPsychologist: [],
			User: {}
<<<<<<< HEAD
=======
			// newpsychologists: {},
			// newcompanies: {}
>>>>>>> main
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
<<<<<<< HEAD
				let response = await fetch("https://3001-chocolate-vole-x619y5hf.ws-eu03.gitpod.io/user", {
=======
				let response = await fetch("https://3001-violet-beetle-r3kgoico.ws-eu03.gitpod.io/user", {
>>>>>>> main
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
