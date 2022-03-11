import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav  className="me-auto">
            <MainNav/>
          </Nav>
          <AuthNav/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;