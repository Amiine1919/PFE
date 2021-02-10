import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";

const NavBar = () => {
  const isAuthaurized = localStorage.getItem("token");
  const isAdmin =
    localStorage.getItem("adminMail") &&
    localStorage.getItem("adminMail").toLowerCase();
  const admin = "medmed@gmail.com";

  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand exact="true" href="/">
        <span className="title-site">Tunisie Tomaia</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link exact="true" href="/">
            Accueil <i class="fas fa-home"></i>
          </Nav.Link>
          <Nav.Link exact="true" href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link exact="true" href="/products">
            Produits
          </Nav.Link>
          {isAdmin == admin ? (
            <NavDropdown title="Carrière" id="basic-nav-dropdown">
              <NavDropdown.Item exact="true" href="/Career">
                Annonces
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item exact="true" href="/user/users">
                Utilisateurs
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link exact="true" href="/Career">
              Carière
            </Nav.Link>
          )}
        </Nav>
        {isAuthaurized ? (
          <Form inline>
            <Nav.Link exact="true" href="/signin">
              <i class="fas fa-user-circle"></i>
            </Nav.Link>
            <Nav.Link href="/" onClick={(e) => localStorage.clear()}>
              <i class="fas fa-sign-out-alt"></i>
            </Nav.Link>
          </Form>
        ) : (
          <Form inline>
            <NavDropdown id="collasible-nav-dropdown">
              <NavDropdown.Item
                exact="true"
                href="/signup"
                id="option-icon-down"
              >
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                exact="true"
                href="/signin"
                id="option-icon-down"
              >
                Sign In
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
