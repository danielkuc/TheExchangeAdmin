import {NavLink} from "react-router-dom";
import React from "react";
import ProtectedLink from "../auth/protected-link";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    {/* <NavLink
      to="/"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Home
    </NavLink> */}
        <ProtectedLink url="https://exchange-shop.netlify.app" name="Home" />
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