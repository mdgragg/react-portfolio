import React from "react";
import HeaderMain from "../components/HeaderMain";
import Headshot from "../components/Headshot";
import About from "../components/About";
import { Container, Row } from "react-bootstrap";

function Home() {
  return (
  <React.Fragment>
    <div className="background">
      <HeaderMain />
      <Container>
        <Row>
          <Headshot />
          <About />
        </Row>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default Home;
