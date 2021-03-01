const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {}
			// newpsychologists: {},
			// newcompanies: {}
		},

		actions: {
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
			},

			editSearchWorkshop: async search_workshop => {
				let response = await fetch(
					"https://3001-purple-sole-h6d5x492.ws-eu03.gitpod.io/user/search_workshop/1",
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
			}
		}
	};
};

export default getState;
