import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./UpdateUser.css";

// React Sweet Alert Initializtion
const MySwal = withReactContent(Swal);

const UpdateUser = ({ socket }) => {
  const [user, showUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`).then((user) => {
      showUser(user.data);
    });
  }, [id]);

  // Fetch Record
  const [roleData, showRoleData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/roles").then((user) => {
      showRoleData(user.data);
    });
  }, []);

  // Update User
  const updateUser = () => {
    axios.patch(`http://localhost:5000/users/${id}`, user).then((user) => {
      showUser(user.data);
    });
  };

  // Sweet Alert
  const updateDataSuccessLink = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "User info updated successfully!",
      showConfirmButton: false,
      timer: 5000,
    });
  };

  // Select options Values for County Field
  const countyOptions = [
    {
      label: "Bomi",
      value: "Bomi",
    },
    {
      label: "Bong",
      value: "Bong",
    },
    {
      label: "Gbarpolu",
      value: "Gbarpolu",
    },
    {
      label: "Grand Bassa",
      value: "Grand Bassa",
    },
    {
      label: "Grand Cape Mount",
      value: "Grand Cape Mount",
    },
    {
      label: "Grand Gedeh",
      value: "Grand Gedeh",
    },
    {
      label: "Grand Kru",
      value: "Grand Kru",
    },
    {
      label: "Lofa",
      value: "Lofa",
    },
    {
      label: "Margibi",
      value: "Margibi",
    },
    {
      label: "Maryland",
      value: "Maryland",
    },
    {
      label: "Montserrado",
      value: "Montserrado",
    },
    {
      label: "Nimba",
      value: "Nimba",
    },
    {
      label: "River Gee",
      value: "River Gee",
    },
    {
      label: "Rivercess",
      value: "Rivercess",
    },
    {
      label: "Sinoe",
      value: "Sinoe",
    },
  ];

  // Select options Values for County Field
  const centerOptions = [
    {
      label: "Bomi",
      value: "Bomi",
    },
    {
      label: "Bong",
      value: "Bong",
    },
    {
      label: "Gbarpolu",
      value: "Gbarpolu",
    },
    {
      label: "Grand Bassa",
      value: "Grand Bassa",
    },
    {
      label: "Grand Cape Mount",
      value: "Grand Cape Mount",
    },
    {
      label: "Grand Gedeh",
      value: "Grand Gedeh",
    },
    {
      label: "Grand Kru",
      value: "Grand Kru",
    },
    {
      label: "Lofa",
      value: "Lofa",
    },
    {
      label: "Margibi",
      value: "Margibi",
    },
    {
      label: "Maryland",
      value: "Maryland",
    },
    {
      label: "Mont NIR HQ",
      value: "Mont NIR HQ",
    },
    {
      label: "Mont Lonestar MTN Congo Town",
      value: "Mont Lonestar MTN Congo Town",
    },
    {
      label: "Mont Lonestar MTN Broad Street",
      value: "Mont Lonestar MTN Broad Street",
    },
    {
      label: "Mont Lonestar MTN Redlight",
      value: "Mont Lonestar MTN Redlight",
    },
    {
      label: "Mont Orange Liberia Byepass",
      value: "Mont Orange Liberia Byepass",
    },
    {
      label: "Mont Orange Liberia 13th Street",
      value: "Mont Orange Liberia 13th Street",
    },
    {
      label: "Mont Tweh Farm",
      value: "Mont Tweh Farm",
    },
    {
      label: "Mont SKD",
      value: "Mont SKD",
    },
    {
      label: "Mont Greenville Town Hall",
      value: "Mont Greenville Town Hall",
    },
    {
      label: "Mont Gogbachop Market",
      value: "Mont Gogbachop Market",
    },
    {
      label: "Mont Waterside Market",
      value: "Mont Waterside Market",
    },
    {
      label: "Nimba Ganta",
      value: "Nimba Ganta",
    },
    {
      label: "Nimba Sanniquellie",
      value: "Nimba Sanniquellie",
    },
    {
      label: "River Gee",
      value: "River Gee",
    },
    {
      label: "Rivercess",
      value: "Rivercess",
    },
    {
      label: "Sinoe",
      value: "Sinoe",
    },
  ];

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="update-user-wrapper">
        <h5>Update User</h5>

        {/* PureCSS Form */}
        <form className="pure-form pure-form-stacked" onSubmit={updateUser}>
          <fieldset>
            {/* <legend>Legend</legend> */}
            <div className="pure-g">
              <div className="pure-u-1-3">
                <label htmlFor="last-name">Last Name:</label>
                <input
                  type="text"
                  id="last-name"
                  className="pure-u-23-24"
                  placeholder="Enter Last Name"
                  value={user.lastName}
                  onChange={(e) =>
                    showUser({ ...user, lastName: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="first-name">First Name:</label>
                <input
                  type="text"
                  id="first-name"
                  className="pure-u-23-24"
                  placeholder="Enter First Name"
                  value={user.firstName}
                  onChange={(e) =>
                    showUser({ ...user, firstName: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="middle-name">Middle Name:</label>
                <input
                  type="text"
                  id="middle-name"
                  className="pure-u-23-24"
                  placeholder="Optional"
                  value={user.middleName}
                  onChange={(e) =>
                    showUser({ ...user, middleName: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  className="pure-u-23-24"
                  placeholder="Enter Position Title"
                  value={user.title}
                  onChange={(e) => showUser({ ...user, title: e.target.value })}
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={(e) => showUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="mobile-one">Mobile One:</label>
                <input
                  type="text"
                  id="mobile-one"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Enter Phone Number"
                  value={user.mobileOne}
                  onChange={(e) =>
                    showUser({ ...user, mobileOne: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="mobile-two">Mobile Two:</label>
                <input
                  type="text"
                  id="mobile-two"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Optional"
                  value={user.mobileTwo}
                  onChange={(e) =>
                    showUser({ ...user, mobileTwo: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label>County:</label>
                <select
                  id="county"
                  className="pure-u-23-24"
                  value={user.county}
                  onChange={(e) =>
                    showUser({ ...user, county: e.target.value })
                  }
                >
                  <option selected disabled>
                    ****Select County****
                  </option>
                  {countyOptions.map((county) => (
                    <option value={county.value}>{county.label}</option>
                  ))}
                </select>
              </div>
              <div className="pure-u-1-3">
                <label>Enrollment Center:</label>
                <select
                  id="enrollment-center"
                  className="pure-u-23-24"
                  value={user.enrollmentCenter}
                  onChange={(e) =>
                    showUser({
                      ...user,
                      enrollmentCenter: e.target.value,
                    })
                  }
                >
                  <option selected disabled>
                    ****Select Center****
                  </option>
                  {centerOptions.map((center) => (
                    <option value={center.value}>{center.label}</option>
                  ))}
                </select>
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="user-name">User Name:</label>
                <input
                  type="email"
                  id="user-name"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Use Email"
                  value={user.userName}
                  onChange={(e) =>
                    showUser({ ...user, userName: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={(e) =>
                    showUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="confirm-password">Comfirm Password:</label>
                <input
                  type="password"
                  id="confirm-password"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Re-Enter Password"
                  value={user.confirmPassword}
                  onChange={(e) =>
                    showUser({
                      ...user,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label>Role:</label>
                <select
                  id="role"
                  className="pure-u-23-24"
                  value={user.role}
                  onChange={(e) =>
                    showUser({
                      ...user,
                      role: e.target.value,
                    })
                  }
                >
                  <option selected>Select Role</option>
                  {roleData.map((role, key) => (
                    <option value={role.value}>{role.role}</option>
                  ))}
                </select>
              </div>
            </div>
            <label htmlFor="multi-terms" className="pure-checkbox">
              <input type="checkbox" id="multi-terms" /> I&#x27;ve read the
              terms and conditions
            </label>
            <button
              type="submit"
              className="pure-button pure-button-primary pure-button-active"
              onClick={updateDataSuccessLink}
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

export default UpdateUser;
