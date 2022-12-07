import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { Transition } from "react-transition-group";

import {
  BsFillGrid3X3GapFill,
  BsStack,
  BsChevronDown,
  BsTools,
  BsGearFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import {
  FaFolderOpen,
  FaUser,
  FaUserEdit,
  FaUsers,
  FaUsersCog,
  FaDatabase,
  FaCoins,
  FaCalendarAlt,
  FaComments,
  FaServer,
  FaRegChartBar,
  FaHdd,
  FaProjectDiagram
} from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
// import { TbDatabaseExport } from "react-icons/tb";
import "./Sidebar.css";

// React Transition Group for Sidebar Toggle
const duration = 1000;

const sidebarStyle = {
  transition: `width ${duration}ms`
}

const sidebarTransitionStyles = {
  entering: { width: '250px' },
  entered: { width: '250px' },
  exiting: { width: '250px' },
  exited: { width: '250px' }
}

const Sidebar = ({ in: inProp }) => {
  const navigate = useNavigate();
  const [userProfile, showUserProfile] = useState([]);
  // Destructuring AuthContext
  const { user, isAuthenticated, setIsAuthenticated, setUser } =
    useContext(AuthContext);

  const [showApplication, setShowApplication] = useState(true);
  const [showBackup, setShowBackup] = useState(true);
  const [showReports, setShowReports] = useState(true);

  function handleClickOne() {
    if (showApplication !== false) {
      document.getElementById("application-items").style.display = "block";
      setShowApplication(false);
    } else {
      document.getElementById("application-items").style.display = "none";
      setShowApplication(true);
    }
  }

  function handleClickTwo() {
    if (showBackup !== false) {
      document.getElementById("backup-items").style.display = "block";
      setShowBackup(false);
    } else {
      document.getElementById("backup-items").style.display = "none";
      setShowBackup(true);
    }
  }

  function handleClickThree() {
    if (showReports !== false) {
      document.getElementById("report-items").style.display = "block";
      setShowReports(false);
    } else {
      document.getElementById("report-items").style.display = "none";
      setShowReports(true);
    }
  }

  // Logout Current User
  const handleUserLogout = (e) => {
    e.preventDefault();
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
        navigate("/", { replace: true });
      }
    });
  };

  // Fetching User Photo
  // useEffect(() => {
  //   axios.get("http://localhost:5000/profiles").then((allUsersPhoto) => {
  //     showUserPhoto(allUsersPhoto.data)
  //   })
  // })

  //  Fetching User Name
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((allUsersProfile) => {
      showUserProfile(allUsersProfile.data)
    })
  }, [])

  return (
    <React.Fragment>
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div id="sidebar" style={{
            ...sidebarStyle,
            ...sidebarTransitionStyles[state]
          }} >
            <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
              {isAuthenticated ?
                userProfile.filter(img => img.userName === user.userName && img.photo === "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg").map(img => (
                  <div id="user-img">
                    <img
                      id="dashboard-img-one"
                      src={img.photo}
                      alt={img.firstName}
                      width={"80px"}
                      height={"85px"}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                )) : null
              }
              {
                isAuthenticated ?
                  userProfile.filter(img => img.userName === user.userName && img.photo !== "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg").map(img => (
                    <div id="user-img">
                      <img
                        id="dashboard-img-one"
                        src={`http://localhost:5000/images/${img.photo}`}
                        alt={img.firstName}
                        width={"80px"}
                        height={"85px"}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  )) : null
              }

              {userProfile.filter(data => data.userName === user.userName).map(data => (
                <div id="dashboard-title" className="user-title">
                  <h5>Welcome, </h5>
                  <span>{`${data.firstName} ${data.middleName}. ${data.lastName}`}</span>
                </div>
              ))}
              <Link to="/dashboard">
                <h3>
                  <span>
                    <BsFillGrid3X3GapFill size={"20px"} />
                  </span>
                  <span id="dashboard-text-one">Dashboard</span>
                </h3>
              </Link>
              <h3 onClick={handleClickOne}>
                <span>
                  <BsStack size={"20px"} />
                </span>
                <span id="dashboard-text-two">Application</span>
                <span className="arrow-down1">
                  <BsChevronDown size={"14px"} id="dashboard-arrow-down" />
                </span>
              </h3>
              <div
                id="application-items"
                className="application-items"
                style={{ display: "none" }}
              >
                {user.role === "Super Admin" ||
                  user.role === "Admin" ||
                  user.role === "Team Lead" ? (
                  <Link to="/add-new-enrollment">
                    <h5>
                      {" "}
                      <span>
                        <FaDatabase size={"13px"} />
                      </span>
                      Add New Enrollment
                    </h5>
                  </Link>
                ) : null}
                {user.role === "Super Admin" ||
                  user.role === "Admin" ||
                  user.role === "Supervisor" ? (
                  <Link to="/manage-enrollment">
                    <h5>
                      {" "}
                      <span>
                        <FaCoins size={"16px"} />
                      </span>
                      Manage Enrollment
                    </h5>
                  </Link>
                ) : null}
                {user.role === "Super Admin" ||
                  user.role === "Admin" ||
                  user.role === "Team Lead" ? (
                  <Link to="/add-new-project">
                    <h5>
                      {" "}
                      <span>
                        <FaProjectDiagram size={"16px"} />
                      </span>
                      Add New Project
                    </h5>
                  </Link>
                ) : null}
                {user.role === "Super Admin" ||
                  user.role === "Admin" ||
                  user.role === "Supervisor" ? (
                  <Link to="/manage-project">
                    <h5>
                      {" "}
                      <span>
                        <AiFillProject size={"16px"} />
                      </span>
                      Manage Project
                    </h5>
                  </Link>
                ) : null}
                {user.role === "Super Admin" || user.role === "Admin" ? (
                  <Link to="/create-new-user">
                    <h5>
                      {" "}
                      <span>
                        <FaUser size={"14px"} />
                      </span>
                      Create New User
                    </h5>
                  </Link>
                ) : null}
                {user.role === "Super Admin" || user.role === "Admin" ? (
                  <Link to="/manage-user">
                    <h5>
                      {" "}
                      <span>
                        <FaUserEdit size={"17px"} />
                      </span>
                      Manage User
                    </h5>
                  </Link>
                ) : null}
                {user.role === "Super Admin" || user.role === "Admin" ? (
                  <Link to="/add-users-role">
                    <h5>
                      {" "}
                      <span>
                        <FaUsers size={"17px"} />
                      </span>
                      Add Users Role
                    </h5>
                  </Link>
                ) : null}
                {user.role === "Super Admin" || user.role === "Admin" ? (
                  <Link to="/manage-users-role">
                    <h5>
                      {" "}
                      <span>
                        <FaUsersCog size={"17px"} />
                      </span>
                      Manage Users Role
                    </h5>
                  </Link>
                ) : null}
                <Link to="/events">
                  <h5>
                    {" "}
                    <span>
                      <FaCalendarAlt size={"14px"} />
                    </span>
                    Events
                  </h5>
                </Link>
                <Link to="/live-chat">
                  <h5>
                    {" "}
                    <span>
                      <FaComments size={"17px"} />
                    </span>
                    Live Chat
                  </h5>
                </Link>
              </div>
              {user.role === "Super Admin" ||
                user.role === "Admin" ||
                user.role === "Supervisor" ||
                user.role === "Manager" ? (
                <h3 onClick={handleClickThree}>
                  <span>
                    <FaFolderOpen size={"20px"} />
                  </span>
                  <span id="dashboard-text-three">Reports</span>
                  <span className="arrow-down3">
                    <BsChevronDown size={"14px"} id="dashboard-arrow-down" />
                  </span>
                </h3>
              ) : null}
              {user.role === "Super Admin" ||
                user.role === "Admin" ||
                user.role === "Supervisor" ||
                user.role === "Manager" ? (
                <div
                  id="report-items"
                  className="application-items"
                  style={{ display: "none" }}
                >
                  <h5>
                    {" "}
                    <span>
                      <FaRegChartBar size={"14px"} />
                    </span>
                    Daily Enrollment
                  </h5>
                  <h5>
                    {" "}
                    <span>
                      <FaRegChartBar size={"14px"} />
                    </span>
                    Weekly Enrollment
                  </h5>
                  <h5>
                    {" "}
                    <span>
                      <FaRegChartBar size={"14px"} />
                    </span>
                    Monthly Enrollment
                  </h5>
                  <Link to="/all-enrollment-reports">
                    <h5>
                      {" "}
                      <span>
                        <FaRegChartBar size={"14px"} />
                      </span>
                      All Enrollment
                    </h5>
                  </Link>
                </div>
              ) : null}
              {user.role === "Super Admin" || user.role === "Admin" ? (
                <h3 onClick={handleClickTwo}>
                  <span>
                    <BsTools size={"20px"} />
                  </span>
                  <span id="dashboard-text-four">Maintenance</span>
                  <span className="arrow-down2">
                    <BsChevronDown size={"14px"} id="dashboard-arrow-down" />
                  </span>
                </h3>
              ) : null}
              {user.role === "Super Admin" || user.role === "Admin" ? (
                <div
                  id="backup-items"
                  className="application-items"
                  style={{ display: "none" }}
                >
                  <h5>
                    {" "}
                    <span>
                      <FaHdd size={"14px"} />
                    </span>
                    Backup
                  </h5>
                  <h5>
                    {" "}
                    <span>
                      <FaServer size={"14px"} />
                    </span>
                    Restore
                  </h5>
                </div>
              ) : null}
              {user.role === "Super Admin" || user.role === "Admin" ? (
                <h3>
                  <span>
                    <BsGearFill size={"20px"} />
                  </span>
                  <span id="dashboard-text-five">Setting</span>
                  <span className="arrow-down4">
                    <BsChevronDown size={"14px"} id="dashboard-arrow-down" />
                  </span>
                </h3>
              ) : null}
              <h3 onClick={handleUserLogout}>
                <span>
                  <BsBoxArrowRight size={"20px"} />
                </span>
                <span id="dashboard-text-six">Logout</span>
              </h3>
            </Scrollbars>
          </div>
        )}
      </Transition>
    </React.Fragment >
  );
};

export default Sidebar;
