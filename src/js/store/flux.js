const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BASEURL: "https://www.swapi.tech/api/",
      endPoint: ["people", "planets"],
      people: JSON.parse(localStorage.getItem("people"))|| [],
      planets: JSON.parse(localStorage.getItem("planets"))|| [],
      favorites : []
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

               window.localStorage.setItem(endPoint,JSON.stringify(store[endPoint]))
                 });
          });
        }
      },
      addFavorites : (item) => {
        let store = getStore()
        let favorite = store.favorites.some((fav)=> item._id ==fav._id)
      if(!favorite){
        setStore({
          favorites:[...store.favorites, item]
        })
      }
      
      },
      deleteFavorite : ()=>{
        let store = getStore()
        store.favorites.filter((fav)=>{return !store.favorites.includes(fav)})

      }
    },
  }; 
};

export default getState;
