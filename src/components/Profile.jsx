import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow rounded mx-3 p-3" onMouseEnter={()=>setOpen(true)} >
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
        <div id="example-collapse-text" >
          <div className="d-flex justify-content-center align-items-center flex-column">
            <label htmlFor="profileImg" className="mt-3">
              <input id="profileImg" type="file" style={{ display: "none" }} />
              <img
                src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
                height={150}
                width={150}
                style={{ borderRadius: "50%" }}
                alt="no image"
              />
            </label>
          </div>

          <form action="" className="w-100 mt-3 p-4">
            <input
              className="form-control mt-3"
              type="text"
              name=""
              id=""
              placeholder="Github"
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="LinkedIn"
            />
            <button className="btn btn-success mt-3 w-100">Update</button>
          </form>
        </div>
      </Collapse>
    </>
  );
}

export default Profile;
