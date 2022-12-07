import React from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./ManageEnrollment.css";

// Tables Import
import DataTableData from "../../../components/TableComponent/DataTable/DataTableData";

const ManageEnrollment = ({ socket }) => {

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="manage-enrollment-wrapper">
        <h5>Manage New Enrollment Data</h5>
        {/* DataTable*/}
        <DataTableData />
      </div>
      <Sidebar />
    </React.Fragment >
  );
};

export default ManageEnrollment;
