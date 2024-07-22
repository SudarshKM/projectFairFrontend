import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../../services/allApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth({ register, login }) {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  // console.log(userDetails);
  const handleregister = async () => {
    const { username, email, password } = userDetails;

    if (!username || !email || !password) {
      toast.warning("Please fill the form completely");
    } else {
      const result = await registerApi(userDetails);
      if (result.status == 200) {
        toast.success("Registration successfull");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  const handlelogin = async () => {
    const { email, password } = userDetails;

    if (!email || !password) {
      toast.warning("Please fill the form completely");
    } else {
      const result = await loginApi({ email, password });
      console.log(result);

      if (result.status == 200) {
        toast.success("Login successfull");
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);

        setUserDetails({
          username: "",
          email: "",
          password: "",
        });

        setTimeout(()=>{navigate("/");},2000)
      }
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column p-5">
        <div>
          <div className="w-100">
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: "black" }}
              className="d-flex align-items-center"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="ms-2 me-2 mb-2" />
              <h4 className="text-start">Back to home</h4>
            </Link>
          </div>
          {/* <div className='bg-success rounded' > */}

          <Row className="bg-success rounded" style={{ width: "100%" }}>
            <Col md={6} className="d-flex align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                className="w-100"
                alt="noImage"
              />
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center flex-column"
            >
              <div className="d-flex align-items-center justify-content-center mb-5 mt-5">
                <FontAwesomeIcon
                  className="text-light me-3 fs-1"
                  icon={faStackOverflow}
                />
                <h3 className="text-light ">Project Fair</h3>
              </div>
              {login && <h5 className="text-light">Sign In to your Account</h5>}{" "}
              {register && (
                <h5 className="text-light">Sign Up to your Account</h5>
              )}
              {register && (
                <input
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                  type="text"
                  placeholder="username"
                  className="form-control mt-3"
                />
              )}
              <input
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                type="email"
                placeholder="email"
                className="form-control mt-3"
              />
              <input
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                type="password"
                placeholder="password"
                className="form-control mt-3"
              />
              {login && (
                <div className="mt-3 mb-3 w-100">
                  <button
                    className="btn btn-warning w-100 mt-3"
                    onClick={handlelogin}
                  >
                    Log In
                  </button>
                  <p className="text-light">
                    {" "}
                    New User ? Click here to{" "}
                    <Link to={"/register"} style={{ color: "white" }}>
                      Register
                    </Link>
                  </p>
                </div>
              )}
              {register && (
                <div className="mt-3 mb-3 w-100">
                  <button
                    className="btn btn-warning w-100 mt-3"
                    onClick={handleregister}
                  >
                    Register
                  </button>
                  <p className="text-light">
                    {" "}
                    Already a User ? Click here to{" "}
                    <Link to={"/login"} style={{ color: "white" }}>
                      Log In
                    </Link>
                  </p>
                </div>
              )}
            </Col>
          </Row>

          {/* </div> */}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </>
  );
}

export default Auth;
