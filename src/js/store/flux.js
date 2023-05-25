const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BASEURL: "https://www.swapi.tech/api/",
      endPoint: ["people", "planets"],
      people: JSON.parse(localStorage.getItem("people"))|| [],
      planets: JSON.parse(localStorage.getItem("planets"))|| [],
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
            });
          });
        }
      },
    },
  };
};

export default getState;
