import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {/* <div className="container">
        <ul className="list-group">
          {store.demo.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                style={{ background: item.background }}
              >
                <Link to={"/single/" + index}>
                  <span>Link to: {item.title}</span>
                </Link>
                {
                  // Conditional render example
                  // Check to see if the background is orange, if so, display the message
                  item.background === "orange" ? (
                    <p style={{ color: item.initial }}>
                      Check store/flux.js scroll to the actions to see the code
                    </p>
                  ) : null
                }
                <button
                  className="btn btn-success"
                  onClick={() => actions.changeColor(index, "orange")}
                >
                  Change Color
                </button>
              </li>
            );
          })}
        </ul>
        <br />
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div> */}
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
          <h1>Luke</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged{" "}
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
