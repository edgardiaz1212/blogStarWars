import React from "react";
import "../../styles/home.css";
import Cards from "../component/Cards.jsx"

export const Home = () => (
  <>
    {" "}
    <div className=" text-danger mt-5">
      <h1>Characters</h1>
    </div>
    <div className="scroll-container" style={{ overflowX: "scroll" }}>
      <Cards /> 
       <Cards /> 
      <Cards /> 
    </div>
    <div className=" text-danger mt-5">
      <h1>Planets</h1>
    </div>
    <div className="scroll-container" style={{ overflowX: "scroll" }}>
      <Cards />
    </div>
  </>
);
