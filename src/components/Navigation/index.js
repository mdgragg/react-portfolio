import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <React.Fragment >


<Navbar className="nav fixed-top" collapseOnSelect expand="lg"  variant="dark">
<Container>
  <Navbar.Brand as={Link} to="/react-portfolio" className="navbar-brand text-white" href="home page">
    MICHAEL GRAGG
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Nav>
        <Nav.Link as={Link} to="/react-portfolio" className="nav-item " href="home page">
          About
        </Nav.Link>

        <Nav.Link as={Link} to="/portfolio" className="nav-item" href="portfolio page">
          Portfolio
        </Nav.Link>

        <a className="nav-link nav-item" href="/Gragg-Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>

    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</React.Fragment>
  );
}

export default Navigation;
