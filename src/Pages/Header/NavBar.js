import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">
      <nav>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/services">
          Services
        </NavLink>
        <NavLink activeClassName="active" to="/departments">
          Departments
        </NavLink>
        <NavLink activeClassName="active" to="/gallery">
          Gallery
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
