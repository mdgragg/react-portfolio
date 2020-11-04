import React from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <Container>
        <Row id="padding">
          <Col />
          <Col md={6}>
            <Card className="card text-center">
              <h3>About Me</h3>
              <hr />
              <Card.Img
                className="card-img-top"
                src={require("./img/Bio-Picture.jpg")}
                alt="Portrait of Justin Roose smiling"
              />
              <Card.Body className="card-body">
                <Card.Text className="card-text">
                  {
                    "Hey, my name is Justin! I'm a full-stack web developer with a concentration on MERN stack. I am qualified in MongoDB, Express.js, React.js, and Node.js with experience in HTML, CSS {Bootstrap and Halfmoon frameworks}, and JavaScript{jQuery, APIs, JSON, AJAX, MySQL, React.js}."
                  }
                </Card.Text>
                <br />
                <Card.Text>
                  I'm currently located in Cleveland, Ohio where I studied web
                  developement at Case Western Reserve University. Contact me
                  for any queries or contract work. Thanks for visiting my page!
                </Card.Text>
                <br />
                <Link
                  to="mailto:justin.d.roose@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email: Justin.D.Roose@gmail.com
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Home;
