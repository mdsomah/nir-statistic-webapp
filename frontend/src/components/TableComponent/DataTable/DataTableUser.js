import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../../Context/AuthContext';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// React Sweet Alert Initializtion
const MySwal = withReactContent(Swal);


const DataTableUser = () => {
  const { user } = useContext(AuthContext);
  // Fetch Record
  const [userInfo, showUserInfo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((allUsers) => {
      showUserInfo(allUsers.data);
    });
  }, []);

  const names = userInfo.map(user => user);

  names.push({
    lastName: names.lastName,
    firstName: names.firstName,
    middleName: names.middleName,
    title: names.title,
    county: names.county,
    enrollmentCenter: names.enrollmentCenter,
    userName: names.userName,
    role: names.role,
    // _id: names._id
  })

  useEffect(() => {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            pagingType: "full_numbers",
            pageLength: 10,
            processing: true,
            dom: "Bfrtip",
            select: {
              style: "single",
            },

            buttons: [
              {
                extend: "pageLength",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "copy",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "csv",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "print",
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body)
                    .find("table")
                    .addClass("compact")
                    .css("font-size", "inherit");
                },
                className: "btn btn-secondary bg-secondary",
              },
            ],

            // fnRowCallback: function (
            //   nRow,
            //   aData,
            //   iDisplayIndex,
            //   iDisplayIndexFull
            // ) {
            //   var index = iDisplayIndexFull + 1;
            //   $("td:first", nRow).html(index);
            //   return nRow;
            // },

            lengthMenu: [
              [10, 20, 30, 50, -1],
              [10, 20, 30, 50, "All"],
            ],
            // columnDefs: [
            //   {
            //     targets: 0,
            //     render: function (data, type, row, meta) {
            //       return type === "export" ? meta.row + 1 : data;
            //     },
            //   },
            // ],
          });
        }, 1000);
      });
    }
  }, []);


  // Delete Record
  // const deleteUser = (id) => {
  //   axios.delete(`http://localhost:5000/users/${id}`).then(() => {
  //     window.confirm("Are you Sure!");
  //     window.alert("User Deleted Successfully!");
  //     window.location.reload(false);
  //   });
  // };


  // Sweet Alert
  const deleteUserSwalWithLink = (id) => {
    const swalWithBootstrapButtons = MySwal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/users/${id}`).then(() => {
            window.location.reload(false);
          });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "User account deleted successfully!",
            "success",
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === MySwal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "No data deleted! :)",
            "error"
          );
        }
      });
  };

  const showTable = () => {
    try {
      return names.map((item) => {
        return (
          <tr>
            {/* <td className="text-xs font-weight-bold">{index + 1}</td> */}
            <td className="text-xs font-weight-bold">{item.lastName}</td>
            <td className="text-xs font-weight-bold">{item.firstName}</td>
            <td className="text-xs font-weight-bold">{item.middleName}</td>
            <td className="text-xs font-weight-bold">{item.title}</td>
            <td className="text-xs font-weight-bold">{item.county}</td>
            <td className="text-xs font-weight-bold">{item.enrollmentCenter}</td>
            <td className="text-xs font-weight-bold">{item.userName}</td>
            <td className="text-xs font-weight-bold">{item.role}</td>
            <td className="action">
              <Link to={`/update-user/${item._id}`}>
                <button className="edit">Edit</button>
              </Link>
              {user.role === "Super Admin" || user.role === "Admin" ? (
                <button
                  id="button"
                  className="delete"
                  // onClick={() => deleteUser(item._id)}
                  onClick={() => deleteUserSwalWithLink(item._id)}
                >
                  Delete
                </button>
              ) : null}
            </td>
            <td></td>
          </tr>
        );
      });
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div class="container-fluid">
      <div class="table-responsive p-0 pb-2">
        <table id="table" className="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              {/* <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">S/N</th> */}
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Last Name</th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">First Name</th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Middle Name</th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Title</th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">County</th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Enrollment Center</th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">User Name</th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Role</th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Action</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {showTable()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTableUser;
