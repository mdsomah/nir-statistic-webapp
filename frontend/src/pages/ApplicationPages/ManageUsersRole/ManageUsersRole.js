import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./ManageUsersRole.css";

const ManageUsersRole = ({ socket }) => {
  // Fetch Record
  const [userRole, setUserRole] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/roles").then((allRoles) => {
      setUserRole(allRoles.data);
    });
  }, []);

  // Delete Record
  const deleteRole = (id) => {
    axios.delete(`http://localhost:5000/roles/${id}`).then(() => {
      window.confirm("Are you Sure!");
      window.alert("Roel Deleted Successfully!");
      window.location.reload(false);
    });
  };

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="manage-users-role-wrapper">
        <h5>Manage Users Role</h5>
        {/* DataTable Table APIs */}
        <table id="table_id" className="display">
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Activate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userRole.map((role, key) => (
              <tr key={role.key}>
                <td>{role.role}</td>
                <td>{role.activate}</td>
                <td className="action">
                  <Link to={`/update-users-role/${role._id}`}>
                    <button className="edit">Edit</button>
                  </Link>
                  <button
                    className="delete"
                    onClick={() => deleteRole(role._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* End of DataTable Table APIs */}
      </div>
      <Sidebar />
    </React.Fragment>
  );
};

export default ManageUsersRole;
