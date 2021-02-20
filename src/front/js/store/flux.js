const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlGetUserPsychologist: "https://3001-cyan-rook-6ypn6m2g.ws-eu03.gitpod.io/user/psychologist/6",
			userPsychologist: []
		},
		actions: {
			getUserPsychologist: () => {
				fetch(getStore().urlGetUserPsychologist).then(async res => {
					const response = await res.json();
					setStore({ userPsychologist: [response] });
				});
			}
		}
	};
};

export default getState;
