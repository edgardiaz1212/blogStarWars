import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite.jsx";
import logo from  "../../img/icons-star-wars-.png"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar  mb-3">
        <Link to="/">
          <span className="navbar-brand me-3 mb-0 h1">StarWars</span>
        </Link>
<img className="logo" src={logo} />

        <div className="ml-auto">

          <Favorite />

        </div>
      </nav>
    </>
  );
};
