import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaCog } from "react-icons/fa";
import { BsFillBellFill, BsChevronDown, BsBoxArrowRight, BsFillPersonFill } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import "./Header.css";
import "./Header-Search.css"

// React Tippy.JS
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// React Time Ago
import TimeAgo from 'timeago-react';
// import ReactTimeAgo from 'react-time-ago';
// import { data } from "jquery";


const Header = ({ socket }) => {
  const navigate = useNavigate();
  // This ref will be connected to the overlay div
  const overlayRef = useRef();
  // Destructuring AuthContext
  const { user, isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);
  const [userProfile, showUserProfile] = useState([]);
  const [userPhoto, setUserPhoto] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  // Enrollment Post
  const [enrollmentPostNotifications, setEnrollmentPostNotifications] = useState([]);
  // Project Post
  const [projectPostNotifications, setProjectPostNotifications] = useState([]);


  // Push Enrollment Data To Notification Bell Icon
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((allUserData) => {
      setEnrollmentPostNotifications(allUserData.data);
      // console.log(allUserData)
    })
    socket.on("enrollmentPostNotification", (data) => setEnrollmentPostNotifications(data));
  }, [socket])

  // Push Project Data To Notification Bell Icon
  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((allUserData) => {
      setProjectPostNotifications(allUserData.data);
    })
    socket.on("projectPostNotification", (data) => setProjectPostNotifications(data));
  }, [socket])

  // User Notification Photo
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((userPic) => {
      setUserPhoto(userPic.data);
    })
    socket.on("projectPostNotification", (data) => setUserPhoto(data));
  }, [socket])


  // Array to accept both enrollment & project notification data
  let notificationItems = [];

  // Push enrollment & project notion to this array
  notificationItems.push(...enrollmentPostNotifications, ...projectPostNotifications);


  // Array to accept both enrollment & project notification data
  // let userPicItems = []

  // Push enrollment & project notion to this array
  // userPicItems.push(...enrollmentPostNotifications, ...userPhoto);
  // console.log(userPicItems);


  // Clear Notification
  const handleNotification = (e) => {
    if (e.target) {
      document.getElementById("counter").style.display = "none";
    }
  }

  // Display onChange Notifications Item
  // const changeNotificationItem = (event, key) => {
  //   if (key !== null) {
  //   console.log(key)
  //   }
  // }


  // Toggle Between Open & Close of Sidebar
  const toggleSidebar = () => {
    if (isSidebarOpen === false) {
      document.getElementById("sidebar").style.width = "60px";
      document.getElementById("dashboard-text-one").style.display = "none";
      document.getElementById("dashboard-text-two").style.display = "none";
      document.getElementById("dashboard-text-three").style.display = "none";
      document.getElementById("dashboard-text-four").style.display = "none";
      document.getElementById("dashboard-text-five").style.display = "none";
      document.getElementById("dashboard-text-six").style.display = "none";
      document.getElementById("dashboard-img-one").style.width = "50px";
      document.getElementById("dashboard-img-one").style.height = "50px";
      document.getElementById("dashboard-title").style.display = "none";
      document.getElementById("dashboard-arrow-down").style.display = "none";
      setIsSidebarOpen(true);
    } else {
      document.getElementById("sidebar").style.width = "250px";
      document.getElementById("dashboard-text-one").style.display = "inline-block";
      document.getElementById("dashboard-text-two").style.display = "inline-block";
      document.getElementById("dashboard-text-three").style.display = "inline-block";
      document.getElementById("dashboard-text-four").style.display = "inline-block";
      document.getElementById("dashboard-text-five").style.display = "inline-block";
      document.getElementById("dashboard-text-six").style.display = "inline-block";
      document.getElementById("dashboard-img-one").style.width = "80px";
      document.getElementById("dashboard-img-one").style.height = "85px";
      document.getElementById("dashboard-title").style.display = "block";
      document.getElementById("dashboard-arrow-down").style.display = "inline-block";
      setIsSidebarOpen(false);
    }
  }


  //  Fetching to display user profile
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((allUsersProfile) => {
      showUserProfile(allUsersProfile.data)
    })
  })



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

  // This function is called when the "Start Searching" button gets clicked
  const openSearch = () => {
    overlayRef.current.style.width = '100%';
  };

  // This function is called when the "Close" button is clicked
  const closeSearch = () => {
    overlayRef.current.style.width = '0%';
  };

  // Fetch Search Data from Apis
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((response) => {
      setRecord(response.data);
    })
  }, [])

  // Search Input
  const searchItems = (searchValue) => {
    setSearch(searchValue);
    if (search !== '') {
      const filteredData = record.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase());
      })
      setFilteredResults(filteredData);
    }
    else {
      setFilteredResults(record);
    }
  }

  // Time & Date
  // const time = new Date();

  return (
    <React.Fragment>
      <div id="header">
        <div id="nav-menu">
          <div className="logo">
            <Link to="/dashboard">
              <img src={"/nir-logo/nirlogo.png"} alt="" width={"45px"} />{" "}
              <span>NIR</span>
            </Link>
          </div>
          <Tippy content="click to toggle sidebar" placement="right">
            <span className="fa-bars">
              <FaBars size={"20px"} onClick={toggleSidebar} />
            </span>
          </Tippy>
        </div>
        <div id="nav-contents">
          <div className="nav-profile dropdown">
            <span className="icons">
              <Tippy content="Live search query" placement="left">
                <span id="search-bar">
                  <FaSearch size={"16px"} onClick={openSearch} style={{ cursor: "pointer" }} />
                </span>
              </Tippy>
              <span>
                <FaCog size={"16px"} />
              </span>
              <Tippy content="Notification" placement="left">
                <span className="bell" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleNotification}>
                  <BsFillBellFill size={"16px"} style={{ cursor: "pointer" }} />
                  {notificationItems.length > 0 &&
                    <span id="counter" className="counter">{notificationItems.length}</span>
                  }
                </span>
              </Tippy>
              {/* Notification Drop down */}
              <div className="dropdown-menu notification">
                <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} width={350}>
                  {/* Enrollment Post Data */}
                  {enrollmentPostNotifications.filter(enrollment => enrollment.userName === user.username).map((enrollment, key) => (
                    <Link to={`/notification-enrollment/${enrollment._id}`} style={{ textDecoration: "none", color: "inherit" }} key={key}>
                      <div className="notification-items">
                        <div className="notification-data" key={key}>
                          <img
                            src={`http://localhost:5000/images/${enrollment.photo}`}
                            alt={enrollment.firstName}
                            width={"65px"}
                            style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="notification-content">
                          <p><strong>{`${enrollment.firstName} ${enrollment.lastName}`}</strong> send in <strong>{enrollment.totalDatas}</strong> <strong>Enrollment Data</strong> from {enrollment.enrollmentCenter} Center, {enrollment.county} County</p>
                          <div className="small-text">
                            {/* Reat Time Ago */}
                            <small>
                              <TimeAgo
                                datetime={Date.now()}
                              />
                              {/* <ReactTimeAgo date={date} locale="en-US" timeStyle="round" /> */}
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {/* Project Post Map Data */}
                  {projectPostNotifications.filter(project => project.userName === user.UserName).map((project, key) => (
                    <Link to={`/notification-project/${project._id}`} style={{ textDecoration: "none", color: "inherit" }} key={key}>
                      <div className="notification-items">
                        <div className="notification-data">
                          < img
                            src={`http://localhost:5000/images/${user.photo}`}
                            alt={project.firstName}
                            width={"65px"}
                            style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="notification-content">
                          <p><strong>{`${project.firstName} ${project.lastName}`}</strong> send in <strong>{project.totalDatas}</strong> <strong>Project Data</strong> from {project.enrollmentCenter} Center, {project.county} County</p>
                          <div className="small-text">
                            {/* React Time Ago */}
                            <small>
                              <TimeAgo
                                datetime={Date.now()}
                              />
                              {/* <ReactTimeAgo date={date} locale="en-US" timeStyle="round-minute" /> */}
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Scrollbars>
              </div>
              {/* End of Notification Drop down */}
            </span>
            <span className="user-profile" data-bs-toggle="dropdown" aria-expanded="false">
              <>
                {isAuthenticated ?
                  userProfile.filter(img => img.userName === user.userName && img.photo === "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg").map(img => (
                    <img
                      src={img.photo}
                      alt={img.firstName}
                      width={"38px"}
                      height={"40px"}
                      style={{ borderRadius: "50%" }}
                    />
                  )) : null
                }
                {isAuthenticated ?
                  userProfile.filter(img => img.userName === user.userName && img.photo !== "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg").map(img => (
                    <img
                      src={`http://localhost:5000/images/${img.photo}`}
                      alt={img.firstName}
                      width={"38px"}
                      height={"40px"}
                      style={{ borderRadius: "50%" }}
                    />
                  )) : null
                }
              </>

              {userProfile.filter(name => name.userName === user.userName).map(name => (
                <span span className="name">{`${name.firstName} ${name.middleName}. ${name.lastName}`}</span>
              ))}
              <span className="chevrondown">
                <BsChevronDown size={"14px"} />
              </span>
            </span>
            <ul class="dropdown-menu dropdown-profile">
              <Link to="/user-profile" style={{ textDecoration: "none" }}>
                <span className="dropdown-item user">
                  <span>
                    <BsFillPersonFill size={"20px"} />
                  </span>
                  <span>View Profile</span>
                </span>
              </Link>
              <span onClick={handleUserLogout} className="logout dropdown-item">
                <span>
                  <BsBoxArrowRight size={"20px"} />
                </span>
                <span>Logout</span>
              </span>
            </ul>
          </div>
        </div >
        {/* Search Overlay */}
        <div div ref={overlayRef} class='overlay' >
          <button class='close-button' onClick={closeSearch}>
            &times;
          </button>
          <div class='overlay-content'>
            <form>
              <input
                type='text'
                placeholder='Enter keyword...'
                className='search-input'
                onChange={(e) => searchItems(e.target.value)}
              />
              <button
                className='search-button'
              // onClick={() => {
              //   console.log('Hi there');
              //   /* Your search logic here */
              // }}
              >
                Go
              </button>
              <p className='search-text'>
                Enter your keyword into the search box
              </p>
            </form>

            {/* Search Results */}
            {search.length > 1 ? (
              <div id="table-search">
                <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} width={350}>
                  <table class="table table-hover  table-striped table-bordered ml-4 ">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Title</th>
                        <th>County</th>
                        <th>Enrollment Center</th>
                        <th>Total Males</th>
                        <th>Total Females</th>
                        <th>Total Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      {search.length > 1 ? (
                        filteredResults.map((item) => {
                          return (
                            <tr>
                              <td>{item.createdDate}</td>
                              <td>{item.lastName}</td>
                              <td>{item.firstName}</td>
                              <td>{item.middleName}</td>
                              <td>{item.title}</td>
                              <td>{item.county}</td>
                              <td>{item.enrollmentCenter}</td>
                              <td>{item.totalMales}</td>
                              <td>{item.totalFemales}</td>
                              <td>{item.totalDatas}</td>
                            </tr>
                          )
                        })
                      ) : (null
                      )}
                    </tbody>
                  </table>
                </Scrollbars>
              </div>
            ) : null}
            {/* End of Search Results */}
          </div>
        </div >
        {/* End of search overlay */}
      </div >
    </React.Fragment >
  );
};

export default Header;
