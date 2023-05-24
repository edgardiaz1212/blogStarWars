import React ,{useContext} from "react";
import "../../styles/home.css";
import Tarjeta from "../component/Tarjeta.jsx";





export const Home = () => {
  
  return(
  <>
    {" "}
    <div className=" text-danger mt-5">
      <h1>Characters</h1>
    </div>
    
    
    <div className="scroll-container" style={{ overflowX: "scroll" }}>
    <Tarjeta/>
      
    </div>
    <div className=" text-danger mt-5">
      <h1>Planets</h1>
    </div>
    <div className="scroll-container" style={{ overflowX: "scroll" }}>
     
    </div>
  </>)
};
