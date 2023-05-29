import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite.jsx";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <span className="navbar-brand me-3 mb-0 h1">StarWars</span>
        </Link>


        <div className="ml-auto">

          <Favorite />

        </div>
      </nav>
    </>
  );
};
