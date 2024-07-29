import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addProjectApi } from "../../services/allApi";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addResponseContext } from "../contex/DataShare";

function AddProject() {
  const [show, setShow] = useState(false);

  const {setAddResponse} = useContext(addResponseContext)

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projImage: "",
  });

  const [preview, setPreview] = useState("");

  const [token , setToken] = useState("");

  const handleClose = () => {
    setShow(false);
    handleClear();
  };
  const handleShow = () => setShow(true);
  const handleClear = () => {
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projImage: "",
    });
    setPreview("");
  };

  const handleAdd =async (e) => {
    e.preventDefault();
    const { title, language, github, website, overview, projImage } = projectDetails;
    if(!title || !language || !github || !website || !overview || !projImage ){
      toast.warning("please fill the form completely")
    } else{
      //api
      //Inorder to send uploaded content use FormData class

      const reqBody = new FormData();

      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projImage",projImage)

    if(token){
      
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization": `Bearer ${token}`
       }
       const result= await addProjectApi(reqBody,reqHeader)


       if(result.status==200){
        toast.success("project added");
        handleClose();
        setAddResponse(result.data)
       } else if(result.status==406){
        toast.warning("alreday  added");

       }
  
       console.log(result);
    } else{
      toast.warning("please login")
    }
    }
  };
  // console.log(projectDetails);

  const handleFile = (e) => {
    // console.log(e.target.files[0]);
    setProjectDetails({ ...projectDetails, projImage: e.target.files[0] });
  };

  useEffect(() => {
    if (projectDetails.projImage) {
      setPreview(URL.createObjectURL(projectDetails.projImage));
    }
  }, [projectDetails.projImage]);

  // console.log(preview);

  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
  },[])

  // console.log(token);

  return (
    <>
      <button className="btn btn-success" onClick={handleShow}>
        Add Project
      </button>

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
                  onChange={(e) => handleFile(e)}
                />
                <img
                  className="w-100"
                  src={
                    preview
                      ? preview
                      : "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="
                  }
                  alt=""
                />
              </label>
            </Col>
            <Col sm={12} md={6}>
              <form action="">
                <input
                  placeholder="Title"
                  value={projectDetails.title}
                  className="form-control mb-3"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                ></input>
                <input
                  placeholder="Language"
                  value={projectDetails.language}
                  className="form-control mb-3"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      language: e.target.value,
                    })
                  }
                ></input>
                <input
                  placeholder="Github"
                  value={projectDetails.github}
                  className="form-control mb-3"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                ></input>
                <input
                  placeholder="Website"
                  value={projectDetails.website}
                  className="form-control mb-3"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                ></input>
                {/* <input placeholder='Overview' className="form-control mb-3" onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}></input> */}
                <textarea
                  placeholder="Overview"
                  value={projectDetails.overview}
                  rows={4}
                  className="form-control mb-3"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      overview: e.target.value,
                    })
                  }
                ></textarea>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

    </>
  );
}

export default AddProject;
