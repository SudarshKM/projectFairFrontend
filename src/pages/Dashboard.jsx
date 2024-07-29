import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MyProject from '../components/Myproject'
import { Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";

function Dashboard() {

  const [user , setuser] = useState("");

  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setuser(JSON.parse(sessionStorage.getItem("existingUser")).username);
    }
  },[])
  return (
    <>
      <Header dash={true} />

      <h3 className="mt-5 ms-3">
        Welcome{" "}
        <span
          className="text-warning"
        >
          {user}
        </span>
      </h3>

      <Row className="w-100 mt-3 container-fluid p-5">
        <Col md={8} sm={12}>
        <MyProject/>
        </Col>
        <Col md={4} sm={12}>
        <Profile/>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
