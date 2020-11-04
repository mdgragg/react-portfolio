import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Project from "../Project";
import Header from "../Header";
import projectsArr from "./projects.json";

function Portfolio() {
  const [projects, setProjects] = useState(projectsArr);
  return (
    <React.Fragment>
      <div className="background">
        <Header />
      <Container>
        <Row>
          <Col md={12}>
            <Row className="project-row">
              {projects.map((project) => (
                <Project
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  deployed={project.deployed}
                  repo={project.repo}
                  description={project.description}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
