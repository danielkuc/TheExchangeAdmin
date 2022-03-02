import React from "react";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;