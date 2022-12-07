import React from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./ManageProject.css";

// Tables Import
import DataTableProject from "../../../components/TableComponent/DataTable/DataTableProject";

const ManageProject = ({ socket }) => {

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="manage-project-wrapper">
        <h5>Manage Project Data</h5>
        {/* DataTable*/}
        <DataTableProject />
      </div>
      <Sidebar />
    </React.Fragment >
  );
};

export default ManageProject;
