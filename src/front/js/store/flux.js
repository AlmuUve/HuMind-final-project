const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			workshops: []
		},
		actions: {
			getWorkshops: () => {
				fetch("https://3001-amber-jaguar-5k0jfiuy.ws-eu03.gitpod.io/user/psychologist/1/workshops").then(
					async res => {
						const response = await res.json();
						setStore({ workshops: response });
					}
				);
			}
		}
	};
};

export default getState;
