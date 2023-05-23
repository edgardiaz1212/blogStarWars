const getState = ({ getStore, getActions, setStore }) => {
	BASEURL: "https://www.swapi.tech/api/"
	endpoints: ["people","planets"]

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getData: async () => {
				try {
				  let response = await fetch(
					`${getStore().BASEURL}`
				  );
		
				  if (response.ok) {
					let data = await response.json();
					;
					console.log(data);
				  } else console.log("error al traer datata");
				} catch (err) {
				  console.log(err);
				}
			  },
		}
	};
};

export default getState;
