const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BASEURL: "https://www.swapi.tech/api/",
      IMAGEURL:"https://starwars-visualguide.com/assets/img",
      endPoint: ["people", "planets", "vehicles", "starships", "films","species", ],
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      species: JSON.parse(localStorage.getItem("species")) || [],
      starships: JSON.parse(localStorage.getItem("starships")) || [],
      films: JSON.parse(localStorage.getItem("films")) || [],
      favorites: [],
      
    },
    actions: {
      // Use getActions to call a function within a fuction

      getData: () => {
        let store = getStore();
        if (store.people.length <= 0) {
          store.endPoint.forEach(async (endPoint) => {
            let response = await fetch(`${store.BASEURL}/${endPoint}`);
            let data = await response.json();
            data.results.forEach(async (item) => {
              let responseItem = await fetch(
                `${store.BASEURL}/${endPoint}/${item.uid}`
              );
              let dataItem = await responseItem.json();

              setStore({
                [endPoint]: [...store[endPoint], dataItem.result],
              });

              window.localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))
            });
          });
        }
      },
      addFavorites: (item) => {
        let store = getStore()
        let favorite = store.favorites.some((fav) => item._id == fav._id)
        if (!favorite) {
          setStore({
            favorites: [...store.favorites, item]
          })
        }

      },
      deleteFavorite: (item) => {
        let store = getStore();
        let updatedFavorites = store.favorites.filter((fav) => fav._id !== item._id);

        setStore({
          favorites: updatedFavorites
        });
      },

    
      
    },
  };
};

export default getState;
