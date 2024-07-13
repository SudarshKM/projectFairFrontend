import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function EditProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <FontAwesomeIcon
        icon={faPenToSquare}
        onClick={handleShow}
        className="text-info"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success ">
            Add Project Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="w-100">
            <Col sm={12} md={6}>
              <label htmlFor="proImg">
                <input
                  id="proImg"
                  type="file"
                  name=""
                  style={{ display: "none" }}
                />
                <img
                  className="w-100"
                  src="https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="
                  alt=""
                />
              </label>
            </Col>
            <Col sm={12} md={6}>
              <form action="">
                <input
                  placeholder="Title"
                  className="form-control mb-3"
                ></input>
                <input
                  placeholder="Language"
                  className="form-control mb-3"
                ></input>
                <input
                  placeholder="Github"
                  className="form-control mb-3"
                ></input>
                <input
                  placeholder="Website"
                  className="form-control mb-3"
                ></input>
                <input
                  placeholder="Overview"
                  className="form-control mb-3"
                ></input>
                <textarea
                  placeholder=""
                  rows={4}
                  className="form-control mb-3"
                ></textarea>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProject;
