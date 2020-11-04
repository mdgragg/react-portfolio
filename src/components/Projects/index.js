import React from "react";
import { Card, Col, Button } from "react-bootstrap";

function Project(prop) {
  return (
    <React.Fragment>
      <Col md={4}>
        <Card className="card card-text-center">
          <p>{prop.name}</p>
          <Card.Img
            className="card-img image-thumbail"
            src={prop.image}
            alt="Home Page of Dinner and a Show."
          />
        </Card>
        <Button
          href={prop.deployed}
          className="btn btn-info btn-sm"
          role="button"
          aria-pressed="true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed
        </Button>
        <Button
          href={prop.repo}
          className="btn btn-info btn-sm"
          role="button"
          aria-pressed="true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git-Repo
        </Button>
      </Col>
    </React.Fragment>
  );
}

export default Project;
