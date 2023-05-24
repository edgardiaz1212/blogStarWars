const getState = ({ getStore, getActions, setStore }) => {
	

	return {
		store: {
			BASEURL: "https://www.swapi.tech/api/",
			endPoint: ["people", "planets",],
			people :[],
            planets:[]

		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getData: () => {
                let store = getStore()

                store.endPoint.forEach(async (endPoint) => {
                    
                    let response = await fetch(`${store.BASEURL}/${endPoint}`)
                    let data = await response.json()

                    setStore({
                        [endPoint]: data.results
                    })
                })

            },

			getPeople: async (uid) => {
                let store = getStore();
                let response = await fetch(`${store.BASEURL}/people/:${uid}`);
                let data = await response.json();
                // setStore({
                //     people: data.results,
                // }
                // )
                console.log(data.results);
            },
            getPlanets: async () => {
                let store = getStore();
                let response = await fetch(`${store.BASEURL}/planets`);
                let data = await response.json();
                setStore({
                    planets: data.results,
                });

		}
	}
}};

export default getState
