import React from "react";
import ProtectedLink from "../auth/protected-link";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <ProtectedLink url="https://exchange-shop.netlify.app" name="Home" />
    <ProtectedLink url="https://exchange-shop.netlify.app/profile" name="Profile" />
    <ProtectedLink url="/" name="Admin" />
  </div>
);

export default MainNav;