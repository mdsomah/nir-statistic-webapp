import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./ManageUser.css";

// Tables Import
import DataTableUser from "../../../components/TableComponent/DataTable/DataTableUser";
// import GridJS from "../../../components/TableComponent/GridJS/GridJS";
// import MUIDataTableComponent from "../../../components/TableComponent/MUIDataTableComponent/MUIDataTableComponent";

const ManageUser = ({ socket }) => {
  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="manage-user-wrapper">
        <h5>Manage User Account</h5>
        {/* DataTable*/}
        <DataTableUser />
      </div>
      <Sidebar />
    </React.Fragment>
  );
};

export default ManageUser;
