import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { allProjectsApi } from "../../services/allApi";

function Project() {
  const [istoken, setToken] = useState("");
  const [project, setProject] = useState([]);
  const [searchKey , setSearchkey] = useState("");

  console.log(searchKey);

  const getAllProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await allProjectsApi(searchKey,reqHeader);
      setProject(result.data);
      // console.log(result);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }

    getAllProject();
  }, [searchKey]);

  return (
    <div >
      <Header />

      <h1 className="text-center mt-5">Projects</h1>
      {istoken ? (
        <div>
          <div className="row w-100 mt-5">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex align-items-center mb-4 p-5">
              <input
                type="text"
                placeholder="Technologies"
                className="form-control"
                style={{ height: "50px" }}
                onChange={(e)=>setSearchkey(e.target.value)}
              />
              <FontAwesomeIcon
                className=" "
                icon={faMagnifyingGlass}
                style={{ marginLeft: "-35px" }}
              />
            </div>
            <div className="col-md-4"></div>
          </div>

          <div className="container-fluid mt-5">
            <div className="row">
                {project?.length > 0
                  ? project?.map((item) => 
              <div className="col-md-4 mb-5">
                  <ProjectCard projects={item} />
                
                  </div>
                )
                  :    <p className="text-center text-danger mt-5 fs-4">
                  No Project to display
                </p>}
              <div className="col-md-4"></div>
            </div>
          </div>

       
        </div>
      ) : (
        <div className="mt-5 w-100 d-flex justify-content-center align-items-center flex-column">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYeKNYSORokGNcx-tbWi5qt0nfiXew38foA&s"
            alt="no image"
          />
          <h4>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              LogIn
            </Link>
          </h4>
        </div>
      )}
    </div>
  );
}

export default Project;
