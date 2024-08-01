import React, { useContext, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { loggedInResponseContext } from "../contex/DataShare";

function Header({ dash }) {

  const {isLoggedIn,setIsLoggedIn} = useContext(loggedInResponseContext);

  const navigate = useNavigate();

  console.log(isLoggedIn);

  const logOut = () => {

    sessionStorage.removeItem("existingUser")

    sessionStorage.removeItem("token")
    setIsLoggedIn(false);
    navigate('/')
  //  console.log(isLoggedIn);
  };

  // useEffect(() => {
  //   const handlePopState = (event) => {
  //     if (!sessionStorage.getItem("token")) {
  //       navigate('/');
  //     }
  //   };
  //   window.history.pushState(null, document.title, window.location.href);

  //   window.addEventListener('popstate', handlePopState);

  //   return () => {
  //     window.removeEventListener('popstate', handlePopState);
  //   };
  // }, [navigate]);

  return (
    <>
      <Navbar bg="success">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand className="text-light fs-4" href="#home">
              <FontAwesomeIcon icon={faStackOverflow} className="fa-2x me-3" />
              Project Fair
            </Navbar.Brand>
          </Link>
          {dash && (
            <button className="btn btn-warning " onClick={logOut}>
              <FontAwesomeIcon icon={faPowerOff} className="me-2" /> Logout
            </button>
          )}{" "}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
