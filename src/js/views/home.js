import React, { useContext } from "react";
import "../../styles/home.css";
import Tarjeta from "../component/Tarjeta.jsx";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = (items) => {
  const { store, actions } = useContext(Context);
  const { people, planets, vehicles, starships, species, films } = store;



  return (
    <>
     <div className="cuerpo">
      <div className=" text-warning mt-5">
        <h1>Characters</h1>
      </div>
      <div className="d-flex scroll-container" style={{ overflowX: "scroll" }}>
        {people.map((item) => {
          return <Tarjeta item={item} key={`${item._id}`} nature="people" uid={`${item.uid}`} />;
        })}
      </div>
      <div className=" text-warning mt-5">
        <h1>Planets</h1>
      </div>
      <div className="d-flex scroll-container" style={{ overflowX: "scroll" }}>
        {planets.map((item) => {
          return <Tarjeta item={item} key={`${item._id}`} nature="planets" uid={`${item.uid}`} />;
        })}
      </div>
      <div className=" text-warning mt-5">
        <h1>Vehicles</h1>
      </div>
      <div className="d-flex scroll-container" style={{ overflowX: "scroll" }}>
        {vehicles.map((item) => {
          return <Tarjeta item={item} key={`${item._id}`} nature="vehicles" uid={`${item.uid}`} />;
        })}
      </div>
      <div className=" text-warning mt-5">
        <h1>Starships</h1>
      </div>
      <div className="d-flex scroll-container" style={{ overflowX: "scroll" }}>
  {starships.map((item) => {
    return <Tarjeta item={item} key={`${item._id}`} nature="starships" />;
  })}
</div>

      <div className=" text-warning mt-5">
        <h1>Species</h1>
      </div>
      <div className="d-flex scroll-container" style={{ overflowX: "scroll" }}>
        {species.map((item) => {
          return <Tarjeta item={item} key={`${item._id}`} nature="species" uid={`${item.uid}`} />;
        })}
      </div>
      <div className=" text-warning mt-5">
        <h1>Films</h1>
      </div>
      <div className="d-flex scroll-container" style={{ overflowX: "scroll" }}>
        {films.map((item) => {
          return <Tarjeta item={item} key={`${item._id}`} nature="films" uid={`${item.uid}`} />;
        })}
      </div>
      </div>
    </>
  );
};
