import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

function Headshot() {
  return (
    <React.Fragment>
  
          
          <Col lg={4} md={12} className="text-center">
            <img class="headshot" src="/assets/Michael.jpg" alt="Gragg headshot" />
       
          <Row>
          <Col md={12}>
       
              <a href="https://www.linkedin.com/in/mdgragg/" target="new">
                <img class="icons" src="/assets/icons/linkedin.png" alt="linkedin" />
              </a>
              <a href="https://github.com/mdgragg" target="new">
                <img class="icons" src="/assets/icons/github.png" alt="github" />
              </a>
              <a href="mailto:contact@michaeldgragg.com" target="new">
                <img class="icons" src="/assets/icons/email.png" alt="email" />
              </a>
              <a href="https://www.facebook.com/mgragg3" target="new">
                <img class="icons" src="/assets/icons/facebook.png" alt="facebook" />
              </a>
            </Col>
            </Row>
            
          </Col>
 
    </React.Fragment>
  );
}

export default Headshot;
