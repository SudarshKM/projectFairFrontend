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
import { server } from "../../services/serverUrl";

function ProjectCard({projects}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(projects);
  return (
    <>
      <Card className="shadow" style={{ width: "100%" }} onClick={handleShow}>
        <Card.Img variant="top" src={`${server}/uploads/${projects.projImage} `}/>
        <Card.Body>
          <Card.Title className=" text-center">{projects?.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{projects?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img src={`${server}/uploads/${projects.projImage} `} className="w-100" alt="" />
            </Col>

            <Col sm={12} md={6}>
              <h4>Description</h4>
              <p>
                {projects?.overview}
              </p>

              <h4>Technologies</h4>
              <p>{projects?.language}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Link to={projects?.github} target="_blank">
            <FontAwesomeIcon className="ms-1 text-secondary"  size="2xl" icon={faGithub} />
          </Link>
          <Link to={projects?.website} target="_blank">
            <FontAwesomeIcon  className="ms-1 text-secondary" size="2xl" icon={faLink} />
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
