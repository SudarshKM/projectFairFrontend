import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddProject() {

  const [show, setShow] = useState(false);

  const [projectDetails , setProjectDetails] = useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projImage:""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(projectDetails);

  return (

  
    <>
    <button className='btn btn-success' onClick={handleShow}>Add Project</button>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success '>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className='w-100'>
            <Col sm={12} md={6}>
            <label htmlFor="proImg">
              <input id='proImg' type="file" name="" style={{display:"none"}}/>
              <img  className='w-100' src="https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=" alt="" />
            </label>
            </Col>
            <Col sm={12} md={6}>
            <form action="">

              <input placeholder='Title' className="form-control mb-3" onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}></input>
              <input placeholder='Language' className="form-control mb-3" onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}></input>
              <input placeholder='Github' className="form-control mb-3" onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}></input>
              <input placeholder='Website' className="form-control mb-3" onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}></input>
              <input placeholder='Overview' className="form-control mb-3" onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}></input>
              <textarea placeholder='' rows={4} className="form-control mb-3"></textarea>
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
  )
}

export default AddProject