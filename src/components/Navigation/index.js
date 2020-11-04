import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <React.Fragment >
      <Navbar className="nav fixed-top"> 
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand text-white" href="home page">
          MICHAEL GRAGG
        </Navbar.Brand>
          <Nav className="navbar-nav justify-content-end">

            <Nav.Link as={Link} to="/" className="nav-item text-white-50 about-link" href="home page">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/portfolio" className="nav-item text-white-50 portfolio-link" href="portfolio page">
              Portfolio
            </Nav.Link>

            <a className="nav-link nav-item text-white-50" href="Gragg-Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>

          </Nav>
          </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Navigation;
