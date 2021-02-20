const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlGetUserCompany: "https://3001-cyan-rook-6ypn6m2g.ws-eu03.gitpod.io/user/company/8",
			userCompany: []
		},
		actions: {
			getUserCompany: () => {
				fetch(getStore().urlGetUserCompany).then(async res => {
					const response = await res.json();
					setStore({ userCompany: [response] });
				});
			}
		}
	};
};

export default getState;
