import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./CreateNewUser.css";

// React Sweet Alert Initializtion
const MySwal = withReactContent(Swal);

const CreateNewUser = ({ socket }) => {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const [user, setUser] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    title: "",
    email: "",
    mobileOne: "",
    mobileTwo: "",
    county: "",
    enrollmentCenter: "",
    userName: "",
    password: "",
    confirmPassword: "",
    role: "",
  });



  // Sweet Alert
  const userCreationSuccessLink = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "User account created successfully!",
      showConfirmButton: false,
      timer: 5000,
    });
  };


  // Fetch Record
  const [roleData, showRoleData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/roles").then((allRoles) => {
      showRoleData(allRoles.data);
    });
  }, []);

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


  // Using HTTP Promise based client Axios to perform http request
  const createUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/register", user)
      .then((response) => {
        console.log(response);
        userCreationSuccessLink();
        window.location.reload(false);
      });
  };

  return (
    <React.Fragment>
      <Header socket={socket} />
      <Sidebar />
      <div id="new-user-wrapper">
        <h5>Create New User Account</h5>

        {/* PureCSS Form */}
        <form className="pure-form pure-form-stacked" onSubmit={createUser}>
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
                  required
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
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
                  required
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
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
                    setUser({ ...user, middleName: e.target.value })
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
                  required
                  value={user.title}
                  onChange={(e) => setUser({ ...user, title: e.target.value })}
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="pure-u-23-24"
                  placeholder="Enter Email"
                  required
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="mobile-one">Mobile One:</label>
                <input
                  type="text"
                  id="mobile-one"
                  className="pure-u-23-24"
                  required
                  placeholder="Enter Phone Number"
                  value={user.mobileOne}
                  onChange={(e) =>
                    setUser({ ...user, mobileOne: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="mobile-two">Mobile Two:</label>
                <input
                  type="text"
                  id="mobile-two"
                  className="pure-u-23-24"
                  placeholder="Optional"
                  value={user.mobileTwo}
                  onChange={(e) =>
                    setUser({ ...user, mobileTwo: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label>County:</label>
                <select
                  id="county"
                  className="pure-u-23-24"
                  required
                  value={user.county}
                  onChange={(e) => setUser({ ...user, county: e.target.value })}
                >
                  <option selected>Select County</option>
                  {countyOptions.map((countyOption) => (
                    <option value={countyOption.value}>
                      {countyOption.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pure-u-1-3">
                <label>Enrollment Center:</label>
                <select
                  id="enrollment-center"
                  className="pure-u-23-24"
                  required
                  value={user.enrollmentCenter}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      enrollmentCenter: e.target.value,
                    })
                  }
                >
                  <option selected>Select Center</option>
                  {centerOptions.map((centerOption) => (
                    <option value={centerOption.value}>
                      {centerOption.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="user-name">User Name:</label>
                <input
                  type="email"
                  id="user-name"
                  className="pure-u-23-24"
                  required
                  placeholder="Use Email"
                  value={user.userName}
                  onChange={(e) =>
                    setUser({ ...user, userName: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="password">Password:</label>

                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  className="pure-u-23-24"
                  required
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div className="pure-u-1-3">
                <label htmlFor="confirm-password">Comfirm Password:</label>
                <input
                  type={passwordShown ? "text" : "password"}
                  id="confirm-password"
                  className="pure-u-23-24"
                  required
                  placeholder="Re-Enter Password"
                  value={user.confirmPassword}
                  onChange={(e) =>
                    setUser({
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
                  required
                  value={user.role}
                  onChange={(e) =>
                    setUser({
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
              <input
                type="checkbox"
                id="multi-terms"
                onClick={togglePassword}
              />{" "}
              Show & Hide Password!
            </label>
            <button
              type="submit"
              className="pure-button pure-button-primary pure-button-active"
            >
              Create
            </button>
          </fieldset>
        </form>
        {/* End of PureCSS Form */}
      </div>
    </React.Fragment>
  );
};

export default CreateNewUser;
