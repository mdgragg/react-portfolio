import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-regular-svg-icons'
import HeaderSkills from "../HeaderSkills";


function Skills() {
  return (
    <React.Fragment>
      <div className="background">
        <HeaderSkills />
        <Container>
          <Row>
            <Col md={12}>
              <Row className="skills-row">
              <Col md={3}>
                Photoshop
              </Col>
              <Col md={3}>
                Illustrator
              </Col>
              <Col md={3}>
                InDesign
              </Col>
              <Col md={3}>

<FontAwesomeIcon icon={Coffee} />
<FontAwesomeIcon icon={faHtml5} />
<i class="fab fa-html5"></i>
                HTML5
              </Col>
              <Col md={3}>
                CSS
              </Col>
              <Col md={3}>
                JavaScript
              </Col>
              <Col md={3}>
                Bootstrap
              </Col>
              <Col md={3}>
                jQuery
              </Col>
              <Col md={3}>
                React.js
              </Col>
              <Col md={3}>
                MongoDB
              </Col>
              <Col md={3}>
                MySQL
              </Col>
              <Col md={3}>
                Node.js
              </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Skills;
