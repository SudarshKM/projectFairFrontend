import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { server } from "../../services/serverUrl";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editProjectApi } from "../../services/allApi";
import { addResponseContext, editResponseContext } from "../contex/DataShare";

function EditProject({ project }) {
  const [show, setShow] = useState(false);

  const [preview, setPreview] = useState("");

  const [key, setKey] = useState(0);

  const [projectDetails, setProjectDetails] = useState({
    id: project?._id,
    title: project?.title,
    language: project?.language,
    github: project?.github,
    website: project?.website,
    overview: project?.overview,
    projImage: "",
  });

  // console.log(projectDetails);

  const { setEditResponse } = useContext(editResponseContext);

  const handleFileUpload = (e) => {
    e.preventDefault();

    setProjectDetails({ ...projectDetails, projImage: e.target.files[0] });
  };

  const handleClose = () => {
    setShow(false);
    handleClose1();
  };
  const handleShow = () => setShow(true);

  const handleClose1 = () => {
    setProjectDetails({
      title: project.title,
      language: project.language,
      github: project.github,
      website: project.website,
      overview: project.overview,
      projImage: "",
    });
    setPreview("");
    if (key == 0) {
      setKey(1);
    } else {
      setKey(0);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { id, title, language, github, website, overview, projImage } =
      projectDetails;
    if (!title || !language || !github || !website || !overview) {
      toast.warning("please fill the form completely");
    } else {
      const reqBody = new FormData();

      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      preview
        ? reqBody.append("projImage", projImage)
        : reqBody.append("projImage", project.projImage);

      const token = sessionStorage.getItem("token");

      if (preview) {
        // if there is new image upload
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        const result = await editProjectApi(id, reqBody, reqHeader);

        // console.log(result);
        if (result.status == 200) {
          toast.success("project updated successfully");

          handleClose();

          setEditResponse(result.data);
        } else {
          toast.warning("something went wrong");
        }
      } else {
        // if there is no new image upload
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const result = await editProjectApi(id, reqBody, reqHeader);

        // console.log(result);
        if (result.status == 200) {
          toast.success("project updated successfully");
          handleClose();
          setEditResponse(result.data);
        } else {
          toast.warning("something went wrong");
        }
      }
    }
  };

  useEffect(() => {
    if (projectDetails.projImage) {
      //createObjectURL() : to convert files into urls
      setPreview(URL.createObjectURL(projectDetails.projImage));
    }
  }, [projectDetails.projImage]);

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
                  key={key}
                  onChange={(e) => handleFileUpload(e)}
                />
                <img
                  className="w-100"
                  src={
                    preview ? preview : `${server}/uploads/${project.projImage}`
                  }
                  alt=""
                />
              </label>
            </Col>
            <Col sm={12} md={6}>
              <form action="">
                <input
                  placeholder="Title"
                  className="form-control mb-3"
                  value={projectDetails.title}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                ></input>
                <input
                  placeholder="Language"
                  className="form-control mb-3"
                  value={projectDetails.language}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      language: e.target.value,
                    })
                  }
                ></input>
                <input
                  placeholder="Github"
                  className="form-control mb-3"
                  value={projectDetails.github}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                ></input>
                <input
                  placeholder="Website"
                  className="form-control mb-3"
                  value={projectDetails.website}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                ></input>

                <textarea
                  placeholder="Overview"
                  rows={4}
                  className="form-control mb-3"
                  value={projectDetails.overview}
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
          <Button variant="warning" onClick={handleClose1}>
            Clear
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </>
  );
}

export default EditProject;
