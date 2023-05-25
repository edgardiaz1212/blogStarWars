import React, { useContext } from "react";
import "../../styles/home.css";
import Tarjeta from "../component/Tarjeta.jsx";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = (items) => {
  const { store, actions } = useContext(Context);
  const { people, planets } = store;
      

  return (
    <>
      {" "}
      <div className=" text-danger mt-5">
        <h1>Characters</h1>
      </div>
      <div className="d-flex scroll-container" style={{ overflowX: "scroll" }}>
        {people.map((item) => {
          return <Tarjeta item={item} key={`${item._id}`} nature="people"/>;
        })}
      </div>
      <div className=" text-danger mt-5">
        <h1>Planets</h1>
      </div>
      <div className="d-flex scroll-container" style={{ overflowX: "scroll" }}>
        {planets.map((item) => {
          return <Tarjeta item={item} key={`${item._id}`} nature="planets" />;
        })}
      </div>
      
    </>
  );
};
