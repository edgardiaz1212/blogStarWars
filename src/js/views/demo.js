import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const { people, planets } = store;

  const params = useParams()
  // console.log(params)
  // console.log(people)

  const finder = () => {
    let detail = store.people.find((item) =>
      item._id == params.id
    )
    console.log(finder)
  }
  useEffect(() => {
    finder()
    console.log("me ejecuto")
  }, [store.people])

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

            <h1>Nombre </h1>
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
          <div className="col-2">hola</div>
          <div className="col-2">hola</div>
          <div className="col-2">hola</div>
          <div className="col-2">hola</div>
          <div className="col-2">hola</div>
          <div className="col-2">hola</div>
        </div>
      </div>
    </>
  );
};
