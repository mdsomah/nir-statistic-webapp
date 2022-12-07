import React, { useState } from "react";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./AddUsersRole.css";

// React Sweet Alert Initializtion
const MySwal = withReactContent(Swal);

const AddUsersRole = ({ socket }) => {
  const [role, setRole] = useState({
    role: "",
    activate: "",
  });

  // Sweet Alert
  const newUserRoleSuccessLink = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "User Role Added successfully!",
      showConfirmButton: false,
      timer: 5000,
    });
  };

  const createRole = () => {
    axios.post("http://localhost:5000/roles", role).then((response) => {
      console.log(response);
      newUserRoleSuccessLink();
      window.location.reload(false);
    });
  };

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="users-role-wrapper">
        <h5>Add New Users Role</h5>
        <form className="pure-form pure-form-stacked" onSubmit={createRole}>
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
                  required
                  value={role.role}
                  onChange={(e) => setRole({ ...role, role: e.target.value })}
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
                  required
                  value={role.activate}
                  onChange={(e) =>
                    setRole({ ...role, activate: e.target.value })
                  }
                />
              </div>
            </div>
            <button
              type="submit"
              className="pure-button pure-button-primary pure-button-active"
            >
              Add
            </button>
          </fieldset>
        </form>
        {/* End of PureCSS Form */}
      </div>
      <Sidebar />
    </React.Fragment>
  );
};

export default AddUsersRole;
