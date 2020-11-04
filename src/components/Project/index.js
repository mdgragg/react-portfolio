import React, {useState} from "react";
import { Col, Button, CardImg, Modal } from "react-bootstrap";

function Project(prop) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <React.Fragment>
      <Col lg={4} md={6} sm={12} className="work-items">
        <CardImg
          className="work-imagebox"
          src={prop.image}
        />
  
      <div onClick={handleShow} className="work-title" >
      <p> {prop.name} </p>
      <a>Click here to read more about this project</a>
      </div>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <CardImg src={prop.image}/>
        <Modal.Body closeButton>
          <Modal.Title>  {prop.name}</Modal.Title>
      
            <p className="desc">{prop.description}</p>
        
          <Button className="project-button" href={prop.deployed} target="_blank" >
              Site Link
          </Button>
          <Button className="project-button" href={prop.repo} target="_blank"> 
              Github Repository 
          </Button>
          <Button className="close-button" onClick={handleClose}>
              Close
          </Button>
          </Modal.Body>
      </Modal>



        
      </Col>
    </React.Fragment>
  );
}
export default Project;
