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
				let response = await fetch(
					"https://3001-amber-chinchilla-9slf7s2d.ws-eu03.gitpod.io/user/psychologist/workshop/1",
					{
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
					}
				);
				response = await response.json();
			},

			addNewWorkshop: async workshop => {
				let body = {
					title: workshop.title,
					category_info: workshop.category,
					duration: workshop.duration,
					price: workshop.price,
					date: workshop.date,
					max_people: workshop.max_people,
					description: workshop.description
				};
				console.log(body);
				let response = await fetch(
					"https://3001-indigo-cat-5kxsdybx.ws-eu03.gitpod.io/user/psychologist/workshop/1",
					{
						method: "POST",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json"
						}),
						body: JSON.stringify(body)
					}
				);

				response = await response.json();
				console.log(response);
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
            
            deleteSearchWorkshop: async id => {
				let response = await fetch(
					"https://3001-emerald-marlin-zsl9focy.ws-eu03.gitpod.io/psychologist/workshop" + id,
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
