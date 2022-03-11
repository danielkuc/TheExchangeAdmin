import React from "react";
import { NavLink } from "react-router-dom";


const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="https://exchange-shop.netlify.app"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Home
    </NavLink>
  </div>
);

export default MainNav;