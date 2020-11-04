import React from "react";
import "./style.css";
import { Col } from "react-bootstrap";

function About() {
  return (
    <React.Fragment>
      
          
          <Col lg={8} md={12} className="text-lg-left text-center main">
            <h1 class="">ABOUT ME</h1>
            <p>
            My name is Michael Gragg, and I’m a visual designer. In August
            2016, I earned a Bachelor's of Science Degree in Visual
            Communication Technology with a focus in Interactive Media at
            Bowling Green State University.
            </p>
            <p>
            Since then, I’ve worked at Precision Metalforming Association in
            Independence, Ohio as a web and graphic designer. On any given day
            you might find me designing graphics to promote an event,
            designing or coding our new website, creating social media
            imagery, or graphics for presentations, mailers and more.
           </p>
            <p>
            I have an appreciation for strong brands and visual identities, and have
            an even deeper passion for being the one that creates them. My
            background in branding, visual design and graphics development
            allow me to take a competitive approach with any project. I’m
            constantly learning new design techniques, trends and tools. 
            </p>
       
          </Col>
       
    </React.Fragment>
  );
}

export default About;
