const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlGetUser: "https://3001-aquamarine-cattle-vxa3ls0l.ws-eu03.gitpod.io/user/9",
			urlGetUserPsychologist: "https://3001-aquamarine-cattle-vxa3ls0l.ws-eu03.gitpod.io/user/11/psychologist",
			user: [],
			userPsychologist: [],
			userCompany: []
		},
		actions: {
			getUser: () => {
				fetch(getStore().urlGetUser).then(async res => {
					const response = await res.json();
					setStore({ user: response });
				});
			},
			getUserPsychologist: () => {
				fetch(getStore().urlGetUserPsychologist).then(async res => {
					const response = await res.json();
					setStore({ userPsychologist: response });
					console.log(getStore().userPsychologist);
				});
			}
		}
	};
};

export default getState;
