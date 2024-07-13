import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

function Header({ dash }) {
  return (
    <>
      <Navbar bg="success">
        <Container
          
        >
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand className="text-light fs-4" href="#home">
              <FontAwesomeIcon icon={faStackOverflow} className="fa-2x me-3" />
              Project Fair
            </Navbar.Brand>
          </Link>
          {dash && (
            <button className="btn btn-warning ">
              <FontAwesomeIcon icon={faPowerOff} className="me-2" /> Logout
            </button>
          )}{" "}
          
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
