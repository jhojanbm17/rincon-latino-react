import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar =() =>{
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Rincon Latino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Categoria/BebidasAzucaradas">Bebidas Azucaradas</NavDropdown.Item>
              <NavDropdown.Item href="/Categoria/BebidasAlcoholicas">
               Bebidas Alcoholicas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Contacto">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href=""><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;