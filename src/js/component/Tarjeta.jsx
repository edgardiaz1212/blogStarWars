import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Tarjeta = (props) => {
  const {item} =props
  const { store, actions } = useContext(Context);
  const { people, planets } = store;
  const params = useParams();

  return (
    <>
         
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
              <span className="card-text"> {item.properties.eye_color} </span>
              <br />
              <span className="card-text">Hair color: {item.properties.hair_color} </span>
              <br />
              <span className="card-text">Gender:{item.properties.gender} </span>
              <br />
            </div>
{/* {if (store = people){
  
}} */}
            <div className="card-body ">
              <Link href="#" className="btn btn-outline-primary me-5">
                Learn more!
              </Link>
              <Link href="#" className="btn btn-outline-warning ms-5">
                <i className="fa-regular fa-heart"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
     
      
    </>
  );
};

export default Tarjeta;
