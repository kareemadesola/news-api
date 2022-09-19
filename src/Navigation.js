import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <Navbar bg="light" expand="sm" className="m-0 p-0">
      <Container className="p-0 m-2">
        <Navbar.Brand as={Link} to="/">
          Peak News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/sports">
              Sports
            </Nav.Link>
            <Nav.Link as={Link} to="/tech">
              Technology
            </Nav.Link>
            <Nav.Link as={Link} to="/finance">
              Finance
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
