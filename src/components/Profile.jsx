import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { server } from "../../services/serverUrl";
import { toast } from "react-toastify";
import { editProfileApi } from "../../services/allApi";

function Profile() {
  const [open, setOpen] = useState(false);
  const [editStatus , setEditStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    github: "",
    linkedin: "",
    profile: "",
  });
  const [preview, setPreview] = useState("");

  const [exstingImage, setExstingImage] = useState("");
  console.log(userDetails);

  const handleFile = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, profile: e.target.files[0] });
  };

  const handleProfileUpdate = async () => {
    const { username, email, password, github, linkedin, profile } =
      userDetails;

    if (!username || !email || !password || !github || !linkedin) {
      toast.info("Please fill the input fields");
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("password", password);
      reqBody.append("email", email);
      reqBody.append("github", github);
      reqBody.append("linkedin", linkedin);

      profile
        ? reqBody.append("profile", profile)
        : reqBody.append("profile", exstingImage);
  
    const token = sessionStorage.getItem("token");

    if (preview) {
      // if there is new image upload
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      const result = await editProfileApi(reqBody, reqHeader);

      console.log(result);
      if (result.status == 200) {
        toast.success("profile updated successfully");

        sessionStorage.setItem("existingUser", JSON.stringify(result.data));
        setEditStatus(true)
      }
    } else {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const result = await editProfileApi(reqBody, reqHeader);

      console.log(result);
      if (result.status == 200) {
        toast.success("profile updated successfully");

        sessionStorage.setItem("existingUser", JSON.stringify(result.data));

        setEditStatus(true)

      }
    }
  }
  };

  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile));
    }

    setEditStatus(false)

  }, [userDetails.profile]);

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      setUserDetails({
        ...userDetails,
        username: user.username,
        email: user.email,
        password: user.password,
        github: user.github,
        linkedin: user.linkedin,
      });
      setExstingImage(userDetails.profile);
    }
  }, [editStatus]);
  return (
    <>
      <div
        className="shadow rounded mx-3 p-3"
        onMouseEnter={() => setOpen(true)}
      >
        <div className="d-flex justify-content-between mt-3">
          <h4 className="text-success">Profile</h4>
          <button
            className="btn btn-outline-info"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {!open ? (
              <FontAwesomeIcon icon={faArrowDown} />
            ) : (
              <FontAwesomeIcon icon={faArrowUp} />
            )}
          </button>
        </div>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <label htmlFor="profileImg" className="mt-3">
              <input
                id="profileImg"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleFile(e)}
              />
              {exstingImage == "" ? (
                <img
                  src={
                    preview
                      ? preview
                      : "https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
                  }
                  height={150}
                  width={150}
                  style={{ borderRadius: "50%" }}
                  alt="no image"
                />
              ) : (
                <img
                  src={preview ? preview : `${server}/uploads/exstingImage`}
                  height={150}
                  width={150}
                  style={{ borderRadius: "50%" }}
                  alt="no image"
                />
              )}
            </label>
          </div>

          <form action="" className="w-100 mt-3 p-4">
            <input
              className="form-control mt-3"
              type="text"
              name=""
              id=""
              placeholder="Github"
              value={userDetails?.github}
              onChange={(e) =>
                setUserDetails({ ...userDetails, github: e.target.value })
              }
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="LinkedIn"
              value={userDetails?.linkedin}
              onChange={(e) =>
                setUserDetails({ ...userDetails, linkedin: e.target.value })
              }
            />
            <button
              className="btn btn-success mt-3 w-100"
              type="button"
              onClick={handleProfileUpdate}
            >
              Update
            </button>
          </form>
        </div>
      </Collapse>
    </>
  );
}

export default Profile;
