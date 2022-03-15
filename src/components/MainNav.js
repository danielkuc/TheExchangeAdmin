import React from "react";
import { NavLink } from "react-router-dom";


const MainNav = () => (
  <div className="navbar-nav mr-auto">
    {/* <NavLink
      to="https://exchange-shop.netlify.app"
      exact="true"
      className={({ isActive }) => "nav-link" + (isActive ? " router-link-exact-active" : "")}
    >
      Home
    </NavLink> */}
    <a href="https://exchange-shop.netlify.app" className="nav-link" >Home</a>
  </div>
);

export default MainNav;