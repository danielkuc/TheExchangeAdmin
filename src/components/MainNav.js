import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Profile
    </NavLink>
    <NavLink
      to="/admin"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}

    >
      Admin
    </NavLink>
  </div>
);

export default MainNav;