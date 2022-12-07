import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./UpdateUsersRole.css";

const UpdateUsersRole = ({ socket }) => {
  const [role, showRole] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/roles/${id}`).then((role) => {
      showRole(role.data);
    });
  }, [id]);

  // Update Role
  const updateRole = () => {
    axios.patch(`http://localhost:5000/roles/${id}`, role).then((role) => {
      showRole(role.data);
      window.confirm("Are You Sure?");
      window.alert("User Successfully Updated!");
    });
  };

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="update-users-role-wrapper">
        <h5>Update Users Role</h5>
        <form className="pure-form pure-form-stacked">
          <fieldset>
            {/* <legend>Legend</legend> */}
            <div className="pure-g">
              <div className="pure-u-1-3">
                <label htmlFor="last-name">Role Name:</label>
                <input
                  type="text"
                  id="last-name"
                  className="pure-u-23-24"
                  placeholder="Enter Role Name"
                  value={role.role}
                  onChange={(e) => showRole({ ...role, role: e.target.value })}
                />
              </div>
            </div>
            <div className="pure-g">
              <div className="pure-u-1-3">
                <label htmlFor="last-name">Activate:</label>
                <input
                  type="text"
                  id="last-name"
                  className="pure-u-23-24"
                  placeholder="Enter Role Name"
                  value={role.activate}
                  onChange={(e) =>
                    showRole({ ...role, activate: e.target.value })
                  }
                />
              </div>
            </div>
            <button
              type="submit"
              className="pure-button pure-button-primary pure-button-active"
              onClick={updateRole}
            >
              Update
            </button>
          </fieldset>
        </form>
        {/* End of PureCSS Form */}
      </div>
      <Sidebar />
    </React.Fragment>
  );
};

export default UpdateUsersRole;
