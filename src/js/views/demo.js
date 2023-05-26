import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const { people, planets } = store;
  const [detail, setDetail]=useState({})
  const params = useParams()
  // console.log(params)
  // console.log(people)

  const finder = () => {
    let detail = store[params.nature].find((item) =>
      item._id == params.id
    )
    setDetail(detail)
  }
  useEffect(() => {
    finder()
    
  }, [store.people, store.planets])

  return (
    <>

      <div className="container fluid">
        <div className="row m-3">
          <div className="col-6 ">
            <img
              src="https://www.hub-4.co.uk/wp-content/uploads/2017/11/400X200.gif"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-6 text-center">

            <h1>{detail.properties?.name}</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. {" "}

            </p>
          </div>
        </div>
      </div>

      <div className="container fluid">
        <hr className="bg-danger" />
        <div className="row m-3">
          <div className="col-2">descripcion 1</div>
          <div className="col-2">descripcion 2</div>
          <div className="col-2">descripcion 3</div>
          <div className="col-2">descripcion 4</div>
          <div className="col-2">descripcion 5</div>
          <div className="col-2">descripcion 6</div>
        </div>
      </div>
    </>
  );
};
