import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function Home() {

const [isLogin , setIsLogIn] = useState(false);

useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setIsLogIn(true)
  }else{
    setIsLogIn(false)
  }
},[])

  return (
    <>
      <div className="container-fluid bg-success">
        <Row className="align-items-center p-5" style={{ height: "100vh" }}>
          <Col md={6} className="">
            <h1 className="text-light" style={{ fontSize: "70px" }}>
              Project Fair
            </h1>
            <p className="text-light">
              One stop destination for all software development Projects
            </p>
          {!isLogin ?  <Link to={"/login"}>
              <button className="btn btn-warning me-1">Get Started</button>
            </Link> :
            <Link to={"/dashboard"}>
              <button className="btn btn-warning ms-1">Manage Projects</button>
            </Link>}
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src="https://learn.g2.com/hubfs/graphic-design-dev.svg"
              className="w-75"
              alt=""
            />
          </Col>
        </Row>
      </div>

      <div className="container-fluid">
        <h1 className="text-center mt-5">Explore our Projects</h1>
        <div className="row mt-5">
          <div className="col-md-4 p-4">
            <ProjectCard />
          </div>
        </div>
        <Link to={"/project"} className="text-center text-danger">
          <h5>See more projects</h5>
        </Link>{" "}
      </div>
    </>
  );
}

export default Home;
