import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mediaPlayer from "../assets/mediaPlayer.png";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="shadow" style={{ width: "100%" }} onClick={handleShow}>
        <Card.Img variant="top" src={mediaPlayer} />
        <Card.Body>
          <Card.Title className=" text-center">MediaPlayer</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>MediaPlayer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img src={mediaPlayer} className="w-100" alt="" />
            </Col>

            <Col sm={12} md={6}>
              <h4>Discription</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                quas voluptates hic adipisci neque dicta sint omnis dolor
                corporis consequatur minima consectetur, aspernatur odit itaque
                molestiae et, nulla reiciendis tempora?
              </p>

              <h4>Technologies</h4>
              <p>React</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Link to={"/"}>
            <FontAwesomeIcon className="ms-1 text-secondary"  size="2xl" icon={faGithub} />
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon  className="ms-1 text-secondary" size="2xl" icon={faLink} />
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
