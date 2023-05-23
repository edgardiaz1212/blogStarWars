import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import Cards from "../component/Cards.jsx";
export const Home = () => (
  <>
    {" "}
    <div className=" text-danger mt-5">
      <h1>Characters</h1>
    </div>
    <Cards />
    <div className=" text-danger mt-5">
      <h1>Planets</h1>
    </div>
    <Cards />
  </>
);
