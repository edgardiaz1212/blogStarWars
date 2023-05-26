import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const { people, planets } = store;
<<<<<<< HEAD
  const params = useParams()
  // console.log(params)
  // console.log(people)
  
  const finder = () => {
    let detail = store.people.find((item) =>
      item._id == params.id
    )
console.log()
  }
  useEffect(() => { 
    finder() 
    console.log("me ejecuto")
    }, [store.people])

  return (
    <>



=======
  const params = useParams();
  const [selected, setSelected] = useState(store); //id is the key for the object in the store.

  return (
    <>
      {selected.filter((name, value) => {
        return (
          <h1>
            {name} {value}
          </h1>
        );
      })}

>>>>>>> 14977ba2bc1fd7e79355f378258069e2b8334669
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
<<<<<<< HEAD
            <h1>Luke </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged{" "}
=======
            <h1>nombre result.properties</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged{" "}
>>>>>>> 14977ba2bc1fd7e79355f378258069e2b8334669
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
