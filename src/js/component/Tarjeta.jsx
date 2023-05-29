import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Tarjeta = (props) => {
  const { item, nature } = props
  const { actions, store } = useContext(Context);
  const { favorites } = store;
  const { addFavorites } = actions;

  const isFavorite = favorites.some((fav) => fav._id === item._id);

  const handleFavoriteClick = () => {
    addFavorites(item);
  };

  return (
    <>
      {
        nature == "people" || nature == "planets" ?
          <div >
            <div className="container horizontal-scrollable m-3">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src="https://www.hub-4.co.uk/wp-content/uploads/2017/11/400X200.gif"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.properties.name}</h5>
                  {
                    nature == "people" ?
                      <>
                        <span className="card-text">Eye color {item.properties.eye_color} </span>
                        <br />
                        <span className="card-text">Hair color: {item.properties.hair_color} </span>
                        <br />
                        <span className="card-text">Gender:{item.properties.gender} </span>
                        <br />
                      </> :
                      nature == "planets" ?
                        <>
                          <span className="card-text"> Population: {item.properties.population} </span>
                          <br />
                          <span className="card-text">Terrain: {item.properties.terrain} </span>
                          <br />


                        </> : null
                  }
                </div>

                <div className="card-body ">

                  <Link to={`/${nature}/${item._id}`} className="btn btn-outline-primary me-5">

                    Learn more!
                  </Link>
                  <button onClick={handleFavoriteClick} className="btn btn-outline-warning ms-5">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div> :
          nature == "planets" ?
            <div >
              <div className="container horizontal-scrollable m-3">
                <div className="card " style={{ width: "18rem" }}>
                  <img
                    src="https://www.hub-4.co.uk/wp-content/uploads/2017/11/400X200.gif"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.properties.name}</h5>
                    <span className="card-text"> {item.properties.population} </span>
                    <br />
                  </div>

                  <div className="card-body ">

                    <Link to={`/demo/${nature}/${item._id}`} className="btn btn-outline-primary me-5">

                      Learn more!
                    </Link>
                    <button onClick={handleFavoriteClick} className="btn btn-outline-warning ms-5">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div> : null
      }
    </>
  );
};

export default Tarjeta;