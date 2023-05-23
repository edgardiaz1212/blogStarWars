import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <span className="navbar-brand me-3 mb-0 h1">StarWars</span>
        </Link>
		

        <div className="ml-auto">
          <Link to="/demo">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle me-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites <span className="badge bg-secondary">4</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                
              </ul>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};
