import React, { useContext, useEffect, useState } from "react";
import AddProject from "../components/AddProject";
import EditProject from "./EditProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { deleteProjectApi, userProjectApi } from "../../services/allApi";
import { addResponseContext, editResponseContext } from "../contex/DataShare";
import { Link } from "react-router-dom";

function Myproject() {
  const [userProject, setUserProject] = useState([]);

  const [deleteSattus, setDeleteStatus] = useState(false);

  const { addResponse } = useContext(addResponseContext);

  const { editResponse } = useContext(editResponseContext);

  const getUserProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await userProjectApi(reqHeader);
      setUserProject(result.data);
    }
  };
  // console.log(userProject);

  const handleDelete = async (id) => {
    const result = await deleteProjectApi(id);

    // console.log(result);
    if (result.status == 200) {
      setDeleteStatus(true);
    }
  };

  useEffect(() => {
    getUserProject();
    setDeleteStatus(false);
  }, [addResponse, deleteSattus, editResponse]);

  return (
    <div className="shadow p-3 px-3 py-4 rounded">
      <div className="d-flex justify-content-between">
        <h4 className="text-success">My project</h4>
        <AddProject />
      </div>

      {userProject?.length > 0 ? (
        userProject.map((item) => (
          <div className="mt-4 bg-light rounded p-3 d-flex justify-content-between">
            <h5>{item.title}</h5>

            <div className="d-flex align-items-center">
              <EditProject project={item} />

              <Link to={item?.website} target="_blank">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="fs-5 text-warning ms-3"
                />
              </Link>
              <Link to={item?.github} target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fs-5 text-success ms-3"
                />
              </Link>
              <FontAwesomeIcon
                icon={faTrash}
                className="fs-5 text-danger ms-3 me-5"
                onClick={() => handleDelete(item?._id)}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-warning">No project to display</p>
      )}
    </div>
  );
}

export default Myproject;
