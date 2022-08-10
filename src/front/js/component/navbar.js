import React from "react";
import { Link } from "react-router-dom";
import LogoUrl from "../../img/1822logo.png";
import "../../styles/navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={LogoUrl} className="logo me-4" />
            <span className="h1">CRUD Template</span>
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/read">
            <button className="btn btn-lg btn-primary me-2">
              See All Employees
            </button>
          </Link>
          <Link to="/create">
            <button className="btn btn-lg btn-primary">New Employee</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
