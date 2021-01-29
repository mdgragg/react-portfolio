import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faNode} from '@fortawesome/free-brands-svg-icons'

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
                <img class="skills-icon" src="/assets/icons/skills/photoshop.png" alt="photoshop logo" />
                Adobe Photoshop
              </Col>
              <Col md={3}>
                <img class="skills-icon" src="/assets/icons/skills/illustrator.png" alt="illustrator logo" />
                Adobe Illustrator
              </Col>
              <Col md={3}>
                <img class="skills-icon" src="/assets/icons/skills/indesign.png" alt="indesign logo" /> 
                Adobe InDesign
              </Col>
              <Col md={3}>
                <FontAwesomeIcon icon={faHtml5} />
                HTML5
              </Col>
              <Col md={3}>
                <FontAwesomeIcon icon={faCss3Alt} />
                CSS
              </Col>
              <Col md={3}>
                <FontAwesomeIcon icon={faJs} />
                JavaScript
              </Col>
              <Col md={3}>
                <FontAwesomeIcon icon={faBootstrap} />
                Bootstrap
              </Col>
              <Col md={3}>
                <i class="icon-jquery"></i>
                jQuery
              </Col>
              <Col md={3}>
                <FontAwesomeIcon icon={faReact} />
                React.js
              </Col>
              <Col md={3}>
                <i class="icon-mongodb"></i>
                MongoDB
              </Col>
              <Col md={3}>
                <i class="icon-mysql-alt"></i>
                MySQL
              </Col>
              <Col md={3}>
                <FontAwesomeIcon icon={faNode} />
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
