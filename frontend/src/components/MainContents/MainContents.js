import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import GoogleReactMap from "../MapComponents/GoogleReactMap/GoogleReactMap";
import ReactLeaflet from "../MapComponents/ReactLeaflet/ReactLeaflet";
import { FaUsers, FaUser, FaProjectDiagram } from "react-icons/fa";
import { BsFullscreen, BsThreeDots } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import "./MainContents.css";
import BassaDoughnutChart from "../ChartComponents/DoughnutChart/BassaDoughnutChart";
import BomiDoughnutChart from "../ChartComponents/DoughnutChart/BomiDoughnutChart";
import BongDoughnutChart from "../ChartComponents/DoughnutChart/BongDoughnutChart";
import CapeMountDoughnutChart from "../ChartComponents/DoughnutChart/CapeMountDoughnutChart";
import GbarpoluDoughnutChart from "../ChartComponents/DoughnutChart/GbarpoluDoughnutChart";
import GrandGedehDoughnutChart from "../ChartComponents/DoughnutChart/GrandGedehDoughnutChart";
import GrandKruDoughnutChart from "../ChartComponents/DoughnutChart/GrandKruDoughnutChart";
import LofaDoughnutChart from "../ChartComponents/DoughnutChart/LofaDoughnutChart";
import MargibiDoughnutChart from "../ChartComponents/DoughnutChart/MargibiDoughnutChart";
import MarylandDoughnutChart from "../ChartComponents/DoughnutChart/MarylandDoughnutChart";
import MontserradoDoughtnutChart from "../ChartComponents/DoughnutChart/MontserradoDoughnutChart";
import NimbaDoughnutChart from "../ChartComponents/DoughnutChart/NimbaDoughnutChart";
import RivercessDoughnutChart from "../ChartComponents/DoughnutChart/RivercessDoughnutChart";
import RivergeeDoughnutChart from "../ChartComponents/DoughnutChart/RivergeeDoughnutChart";
import SinoeDoughnutChart from "../ChartComponents/DoughnutChart/SinoeDoughnutChart";
import LineChart from "../ChartComponents/LineChart/LineChart";
import PolarAreaChart from "../ChartComponents/PolarAreaChart/PolarAreaChart";

// React Tippy.JS
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// React Time Ago
import TimeAgo from 'timeago-react';

// GridJS Table
import GridJS from "../TableComponent/GridJS/GridJS";
import { AuthContext } from "../../Context/AuthContext";

const MainContents = ({ socket }) => {
  const { user } = useContext(AuthContext);
  const [showCounty, setShowCounty] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  // Enrollment Post
  const [enrollmentPostNotifications, setEnrollmentPostNotifications] = useState([]);
  // Project Post
  const [projectPostNotifications, setProjectPostNotifications] = useState([]);


  // Push Enrollment Data To Notification Bell Icon
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((allUserData) => {
      setEnrollmentPostNotifications(allUserData.data);
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


  // Fetching Users info
  const [showUsers, setShowUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((displayUsers) => {
      setShowUsers(displayUsers.data);
      // console.log(displayUsers);
    });
  }, []);

  // Feting Enrollment Data to be display on Dashboard components
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((dataItem) => {
      setEnrollmentData(dataItem.data);
      // console.log(dataPerMales);
    });
  }, []);

  // Feting Project Data to be display on Dashboard components
  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((dataItem) => {
      setProjectData(dataItem.data);
      // console.log(dataPerMales);
    });
  }, []);


  // Slecting Individaul County to display
  const countySelection = (e) => {
    console.log(e.target.value);
    if (e.target.value === "1") {
      document.getElementById("bomi-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("bomi-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "2") {
      document.getElementById("bong-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("bong-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "3") {
      document.getElementById("gbarpolu-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("gbarpolu-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "4") {
      document.getElementById("grand-bassa-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("grand-bassa-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "5") {
      document.getElementById("cape-mount-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("cape-mount-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "6") {
      document.getElementById("grand-gedeh-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("grand-gedeh-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "7") {
      document.getElementById("grand-kru-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("grand-kru-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "8") {
      document.getElementById("lofa-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("lofa-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "9") {
      document.getElementById("margibi-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("margibi-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "10") {
      document.getElementById("maryland-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("maryland-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "11") {
      document.getElementById("montserrado-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("montserrado-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "12") {
      document.getElementById("nimba-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("nimba-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "13") {
      document.getElementById("rivergee-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("rivergee-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "14") {
      document.getElementById("rivercess-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("rivercess-county").style.display = "none";
      setShowCounty();
    }
    if (e.target.value === "15") {
      document.getElementById("sinoe-county").style.display = "block";
      setShowCounty();
    } else {
      document.getElementById("sinoe-county").style.display = "none";
      setShowCounty();
    }
  };

  // Getting Week Number of Month
  // let todayDate = new Date();
  // let oneJan = new Date(todayDate.getFullYear(), 0, 1);
  // let numberOfDays = Math.floor((todayDate - oneJan) / (24 * 60 * 60 * 1000));
  // let result = Math.ceil((todayDate.getDay() + 1 + numberOfDays) / 7);
  // console.log(result);

  // Time Initializer
  let time = new Date();

  // let time = new Date();
  // console.log(
  //   time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  // );


  // Handle Full Screen
  const handle = useFullScreenHandle();

  return (
    <React.Fragment>
      {/* Dashboard Section */}
      <section id="dashboard-section">
        {/* Daily Data Display */}
        <div className="dashboard-item">
          <div className="dashboard-items">
            <span className="user">
              <FaUsers size={"26px"} />
            </span>
            <span className="percent">
              <MdOpenInNew size={"26px"} />
            </span>
          </div>
          <h3>
            {
              time.getHours() === 0 ?
                enrollmentData.reduce(
                  (total, currentItem) => (total += currentItem.totalDatas * null),
                  null
                ) + projectData.reduce(
                  (total, currentItem) => (total += currentItem.totalDatas * null),
                  null
                ) : time.getDate() ?
                  enrollmentData.reduce(
                    (total, currentItem) => (currentItem.totalDatas + total),
                    null
                  ) + projectData.reduce(
                    (total, currentItem) => (currentItem.totalDatas + total),
                    null
                  ) : null
            }
          </h3>
          <h5>Daily Enrollment</h5>
        </div>
        {/* End of Daily Data Display */}

        {/* Weekly Data Display */}
        <div className="dashboard-item">
          <div className="dashboard-items">
            <span className="user">
              {" "}
              <FaUsers size={"26px"} />
            </span>
            <span className="percent">
              {" "}
              <MdOpenInNew size={"26px"} />
            </span>
          </div>
          <h3>
            {
              time.getDay() === 0 ?
                enrollmentData.reduce(
                  (total, currentItem) => (total += currentItem.totalDatas * null),
                  null
                ) + projectData.reduce(
                  (total, currentItem) => (total += currentItem.totalDatas * null),
                  null
                ) : time.getDate() ?
                  enrollmentData.reduce(
                    (total, currentItem) => (currentItem.totalDatas + total),
                    null
                  ) + projectData.reduce(
                    (total, currentItem) => (currentItem.totalDatas + total),
                    null
                  ) : null
            }
          </h3>
          <h5>Weekly Enrollment</h5>
        </div>
        {/* End of Weekly Data Display */}

        {/* Monthly Data Display */}
        <div className="dashboard-item">
          <div className="dashboard-items">
            <span className="user">
              {" "}
              <FaUsers size={"26px"} />
            </span>
            <span className="percent">
              {" "}
              <MdOpenInNew size={"26px"} />
            </span>
          </div>
          <h3>
            {
              time.getDate() === 1 ?
                enrollmentData.reduce(
                  (total, currentItem) => (total += currentItem.totalDatas * null),
                  null
                ) + projectData.reduce(
                  (total, currentItem) => (total += currentItem.totalDatas * null),
                  null
                ) : enrollmentData.reduce(
                  (total, currentItem) => (currentItem.totalDatas + total),
                  null
                ) + projectData.reduce(
                  (total, currentItem) => (currentItem.totalDatas + total),
                  null
                )
            }
          </h3>
          <h5>Monthly Enrollment</h5>
        </div>
        {/* End of Monthly Data Display */}

        {/* Yearly Data Display */}
        <div className="dashboard-item">
          <div className="dashboard-items">
            <span className="user">
              {" "}
              <FaUsers size={"26px"} />
            </span>
            <span className="percent">
              {" "}
              <MdOpenInNew size={"26px"} />
            </span>
          </div>
          <h3>
            {
              time.getMonth() === 0 ?
                enrollmentData.reduce(
                  (total, currentItem) => (total += currentItem.totalDatas * null),
                  null
                ) + projectData.reduce(
                  (total, currentItem) => (total += currentItem.totalDatas * null),
                  null
                ) : enrollmentData.reduce(
                  (total, currentItem) => (currentItem.totalDatas + total),
                  null
                ) + projectData.reduce(
                  (total, currentItem) => (currentItem.totalDatas + total),
                  null
                )
            }
          </h3>
          <h5>Yearly Enrollment</h5>
        </div>
        {/* End of Yearly Data Display */}

        <div className="dashboard-item">
          <div className="dashboard-items">
            <span className="user">
              {" "}
              <FaUsers size={"26px"} />
            </span>
            <span className="percent">
              {" "}
              <MdOpenInNew size={"26px"} />
            </span>
          </div>
          <h3>
            {
              enrollmentData.reduce(
                (total, currentItem) => (total += currentItem.totalDatas),
                null
              ) + projectData.reduce(
                (total, currentItem) => (total += currentItem.totalDatas),
                null
              )
            }
          </h3>
          <h5>Overall Total Enrollment</h5>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-items">
            <span className="user">
              <FaUser size={"20px"} />
            </span>
            <span className="percent">
              {" "}
              <MdOpenInNew size={"26px"} />
            </span>
          </div>
          <h3>
            {
              enrollmentData.reduce(
                (total, currentItem) => (total += currentItem.totalMales),
                null
              ) + projectData.reduce(
                (total, currentItem) => (total += currentItem.totalMales),
                null
              )
            }
          </h3>
          <h5>Total Enrolled Males</h5>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-items">
            <span className="user">
              {" "}
              <FaUser size={"20px"} />
            </span>
            <span className="percent">
              {" "}
              <MdOpenInNew size={"26px"} />
            </span>
          </div>
          <h3>
            {
              enrollmentData.reduce(
                (total, currentItem) => (total += currentItem.totalFemales),
                null
              ) + projectData.reduce(
                (total, currentItem) => (total += currentItem.totalFemales),
                null
              )
            }
          </h3>
          <h5>Total Enrolled Females</h5>
        </div>
        <div className="dashboard-item dropdown">
          <div className="dashboard-items">
            <span className="user">
              <FaProjectDiagram size={"26px"} />
            </span>
            <span className="percent">
              <Tippy content="Click to view all projects" placement="top">
                <span className="three-dots" data-bs-toggle="dropdown" aria-expanded="false" style={{
                  cursor: "pointer"
                }}>
                  <BsThreeDots size={"26px"} style={{ textDecoration: "none" }} />
                </span>
              </Tippy>
              <div className="dropdown-menu">
                <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
                  <li className="dropdown-item">View All Projects</li>
                </Link>
              </div>
            </span>
          </div>
          <h3>
            {
              projectData.reduce(
                (total, currentItem) => (total += currentItem.numberOfProjects),
                null
              )
            }
          </h3>
          <h5>Special Projects</h5>
        </div>
      </section>
      {/* End of Dashboard Section */}

      {/* Statistic & Graph Section */}
      <section id="statistics-section">
        <div className="statistic">
          <h3>Overall Statistics Per County</h3>
          <select
            id="select-county"
            value={showCounty}
            onChange={countySelection}
          >
            <option selected disabled>
              ***Select County***
            </option>
            <option value="1">Bomi</option>
            <option value="2">Bong</option>
            <option value="3">Gbarpolu</option>
            <option value="4">Grand Bassa</option>
            <option value="5">Grand Cape Mount</option>
            <option value="6">Grand Gedeh</option>
            <option value="7">Grand Kru</option>
            <option value="8">Lofa</option>
            <option value="9">Margibi</option>
            <option value="10">Maryland</option>
            <option value="11">Montserrado</option>
            <option value="12">Nimba</option>
            <option value="13">River Gee</option>
            <option value="14">Rivercess</option>
            <option value="15">Sinoe</option>
          </select>
          {/* Bomi County */}
          <div id="bomi-county">
            <div id="data-table">
              <h3>Bomi County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null) +
                        projectData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null)
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null) +
                        projectData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null)
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null) +
                        projectData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null)
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null) +
                        projectData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null)
                      }
                    </td>
                    <td>
                      {/* Total Males Fetch */}
                      {
                        enrollmentData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalMales)
                          .reduce((bomi, current) => (bomi += current), null) +
                        projectData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalMales)
                          .reduce((bomi, current) => (bomi += current), null)
                      }
                    </td>
                    <td>
                      {/* Total Females Fetch */}
                      {
                        enrollmentData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalFemales)
                          .reduce((bomi, current) => (bomi += current), null) +
                        projectData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalFemales)
                          .reduce((bomi, current) => (bomi += current), null)
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null) +
                        projectData
                          .filter((bomi) => bomi.county === "Bomi")
                          .map((bomi) => bomi.totalDatas)
                          .reduce((bomi, current) => (bomi += current), null)
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <BomiDoughnutChart />
          </div>
          {/* End of Bomi County */}

          {/* Bong County */}
          <div id="bong-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Bong County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          ) +
                        projectData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          ) +
                        projectData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          ) +
                        projectData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          ) +
                        projectData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalMales)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          ) +
                        projectData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalMales)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalFemales)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          ) +
                        projectData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalFemales)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          ) +
                        projectData
                          .filter((bong) => bong.county === "Bong")
                          .map((bong) => bong.totalDatas)
                          .reduce(
                            (bong, bongCurrent) => (bong += bongCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <BongDoughnutChart />
          </div>
          {/* End of Bong County */}

          {/* Gbarpolu County */}
          <div id="gbarpolu-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Gbarpolu County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          ) +
                        projectData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          ) +
                        projectData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          ) +
                        projectData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          ) +
                        projectData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalMales)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          ) +
                        projectData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalMales)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalFemales)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          ) +
                        projectData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalFemales)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          ) +
                        projectData
                          .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
                          .map((gbarpolu) => gbarpolu.totalDatas)
                          .reduce(
                            (gbarpolu, gbarpoluCurrent) =>
                              (gbarpolu += gbarpoluCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <GbarpoluDoughnutChart />
          </div>
          {/* End of Gbarpolu County */}

          {/* Grand Bassa County */}
          <div id="grand-bassa-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Grand Bassa County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          ) +
                        projectData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          ) +
                        projectData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          ) +
                        projectData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          ) +
                        projectData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalMales)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          ) +
                        projectData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalMales)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalFemales)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          ) +
                        projectData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalFemales)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          ) +
                        projectData
                          .filter((bassa) => bassa.county === "Grand Bassa")
                          .map((bassa) => bassa.totalDatas)
                          .reduce(
                            (bassa, bassaCurrent) => (bassa += bassaCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <BassaDoughnutChart />
          </div>
          {/* End of Grand Bassa County */}

          {/* Grand Cape Mount County */}
          <div id="cape-mount-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Grand Cape Mount County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalMales)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalMales)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalFemales)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalFemales)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (capeMount) => capeMount.county === "Grand Cape Mount"
                          )
                          .map((capeMount) => capeMount.totalDatas)
                          .reduce(
                            (capeMount, capeMountCurrent) =>
                              (capeMount += capeMountCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <CapeMountDoughnutChart />
          </div>
          {/* End of Grand Cape Mount County */}

          {/* Grand Gedeh County */}
          <div id="grand-gedeh-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Grand Gedeh County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalMales)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalMales)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalFemales)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalFemales)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (grandGedeh) => grandGedeh.county === "Grand Gedeh"
                          )
                          .map((grandGedeh) => grandGedeh.totalDatas)
                          .reduce(
                            (grandGedeh, grandGedehCurrent) =>
                              (grandGedeh += grandGedehCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <GrandGedehDoughnutChart />
          </div>
          {/* End of Grand Gedeh County */}

          {/* Grand Kru County */}
          <div id="grand-kru-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Grand Kru County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Datas Fetch */}
                      {
                        enrollmentData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          ) +
                        projectData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Datas Fetch */}
                      {
                        enrollmentData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          ) +
                        projectData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Datas Fetch */}
                      {
                        enrollmentData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          ) +
                        projectData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Datas Fetch */}
                      {
                        enrollmentData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          ) +
                        projectData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalMales)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          ) +
                        projectData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalMales)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalFemales)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          ) +
                        projectData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalFemales)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Datas Fetch */}
                      {
                        enrollmentData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          ) +
                        projectData
                          .filter((grandKru) => grandKru.county === "Grand Kru")
                          .map((grandKru) => grandKru.totalDatas)
                          .reduce(
                            (grandKru, grandKruCurrent) =>
                              (grandKru += grandKruCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <GrandKruDoughnutChart />
          </div>
          {/* End of Grand Kru County */}

          {/* Lofa County */}
          <div id="lofa-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Lofa County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          ) +
                        projectData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          ) +
                        projectData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          ) +
                        projectData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          ) +
                        projectData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalMales)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          ) +
                        projectData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalMales)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalFemales)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          ) +
                        projectData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalFemales)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          ) +
                        projectData
                          .filter((lofa) => lofa.county === "Lofa")
                          .map((lofa) => lofa.totalDatas)
                          .reduce(
                            (lofa, lofaCurrent) => (lofa += lofaCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <LofaDoughnutChart />
          </div>
          {/* End of Lofa County */}

          {/* Margibi County */}
          <div id="margibi-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Margibi County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          ) +
                        projectData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          ) +
                        projectData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          ) +
                        projectData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          ) +
                        projectData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalMales)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          ) +
                        projectData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalMales)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalFemales)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          ) +
                        projectData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalFemales)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          ) +
                        projectData
                          .filter((margibi) => margibi.county === "Margibi")
                          .map((margibi) => margibi.totalDatas)
                          .reduce(
                            (margibi, margibiCurrent) =>
                              (margibi += margibiCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <MargibiDoughnutChart />
          </div>
          {/* End of Margibi County */}

          {/* Maryland County */}
          <div id="maryland-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Maryland County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          ) +
                        projectData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          ) +
                        projectData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          ) +
                        projectData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          ) +
                        projectData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalMales)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          ) +
                        projectData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalMales)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalFemales)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          ) +
                        projectData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalFemales)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          ) +
                        projectData
                          .filter((maryland) => maryland.county === "Maryland")
                          .map((maryland) => maryland.totalDatas)
                          .reduce(
                            (maryland, marylandCurrent) =>
                              (maryland += marylandCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <MarylandDoughnutChart />
          </div>
          {/* End of Maryland County */}

          {/* Montserrado County */}
          <div id="montserrado-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Montserrado County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalMales)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalMales)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalFemales)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalFemales)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          ) +
                        projectData
                          .filter(
                            (montserrado) => montserrado.county === "Montserrado"
                          )
                          .map((montserrado) => montserrado.totalDatas)
                          .reduce(
                            (montserrado, montserradoCurrent) =>
                              (montserrado += montserradoCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <MontserradoDoughtnutChart />
          </div>
          {/* End of Montserrado County */}

          {/* Nimba County */}
          <div id="nimba-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Nimba County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalMales)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalMales)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalFemales)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalFemales)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((nimba) => nimba.county === "Nimba")
                          .map((nimba) => nimba.totalDatas)
                          .reduce(
                            (nimba, nimbaCurrent) => (nimba += nimbaCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <NimbaDoughnutChart />
          </div>
          {/* End of Nimba County */}

          {/* River Gee County */}
          <div id="rivergee-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>River Gee County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalMales)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalMales)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalFemales)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalFemales)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          ) +
                        projectData
                          .filter((riverGee) => riverGee.county === "River Gee")
                          .map((riverGee) => riverGee.totalDatas)
                          .reduce(
                            (riverGee, nimbaCurrent) =>
                              (riverGee += nimbaCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <RivergeeDoughnutChart />
          </div>
          {/* End of River Gee County */}

          {/* Rivercess County */}
          <div id="rivercess-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Rivercess County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          ) +
                        projectData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          ) +
                        projectData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          ) +
                        projectData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          ) +
                        projectData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalMales)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          ) +
                        projectData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalMales)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalFemales)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          ) +
                        projectData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalFemales)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          ) +
                        projectData
                          .filter((rivercess) => rivercess.county === "Rivercess")
                          .map((rivercess) => rivercess.totalDatas)
                          .reduce(
                            (rivercess, rivercessCurrent) =>
                              (rivercess += rivercessCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <RivercessDoughnutChart />
          </div>
          {/* End of Rivercess County */}

          {/* Sinoe County */}
          <div id="sinoe-county" style={{ display: "none" }}>
            <div id="data-table">
              <h3>Sinoe County</h3>
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th>
                    <th>Yearly</th>
                    <th>Total Males</th>
                    <th>Total Females</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* Daily Data Fetch */}
                      {
                        enrollmentData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          ) +
                        projectData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Weekly Data Fetch */}
                      {
                        enrollmentData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          ) +
                        projectData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Monthly Data Fetch */}
                      {
                        enrollmentData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          ) +
                        projectData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Yearly Data Fetch */}
                      {
                        enrollmentData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          ) +
                        projectData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Males Fetch */}
                      {
                        enrollmentData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalMales)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          ) +
                        projectData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalMales)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          )
                      }
                    </td>
                    <td>
                      {/* Daily Females Fetch */}
                      {
                        enrollmentData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalFemales)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          ) +
                        projectData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalFemales)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          )
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr className="total">
                    <th>Total Enrollment:</th>
                    <th>
                      {/* Total Data Fetch */}
                      {
                        enrollmentData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          ) +
                        projectData
                          .filter((sinoe) => sinoe.county === "Sinoe")
                          .map((sinoe) => sinoe.totalDatas)
                          .reduce(
                            (sinoe, sinoeCurrent) => (sinoe += sinoeCurrent),
                            null
                          )
                      }
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <SinoeDoughnutChart />
          </div>
          {/* End of Sinoe County */}
        </div>
        <div className="graph">
          <h3>Data Visualization Threshold of Enrollment Activities Per Day</h3>
          <LineChart />
          <PolarAreaChart />
        </div>
      </section>
      {/* End of Statistic & Graph Section */}

      {/* Map & Activities Section */}
      <section className="map-activities-section">
        <div className="map">
          <div className="map-title">
            <h3>Map</h3>
            <Tippy content="Click to view full screen">
              <span onClick={handle.enter} style={{
                cursor: "pointer"
              }}>
                <BsFullscreen size={"16px"} />
              </span>
            </Tippy>
          </div>
          {/* ReactLeaflet Map */}
          <FullScreen handle={handle}>
            <ReactLeaflet />
          </FullScreen>
          {/* End of ReactLeaflet Map */}
          {/* Google Map React APIs */}
          {/* <GoogleReactMap /> */}
          {/* End of Google Map React APIs */}
        </div>
        <div className="activities dropdown">
          <div className="title">
            <h3>Recent Activities</h3>
            <span className="recent-activities">
              <Tippy content="Click to view all activities" placement="left">
                <span className="three-dots" data-bs-toggle="dropdown" aria-expanded="false" style={{
                  cursor: "pointer"
                }}>
                  < BsThreeDots size={"20px"} style={{ textDecoration: "none" }} />
                </span>
              </Tippy>
              <div className="dropdown-menu">
                <Link to="/recent-activities" style={{ textDecoration: "none", color: "inherit" }}>
                  <li className="dropdown-item">View All Activities</li>
                </Link>
              </div>
            </span>
          </div>
          {/* Enrollment Activities */}
          {
            enrollmentPostNotifications.filter(enrollment => enrollment.userName === user.UserName).map(enrollment => (
              <div className="contents">
                <div className="contents-items">
                  {showUsers.filter(img => img.userName === user.userName).map(img => (
                    <div className="content-img">
                      <img src={`http://localhost:5000/images/${img.photo}`}
                        alt={img.firstName}
                        width={"40px"}
                        style={{ borderRadius: "50%" }} />
                    </div>
                  ))}
                  <div className="content-text">
                    <p><strong>{`${enrollment.firstName} ${enrollment.lastName}`}</strong> send in <strong>{enrollment.totalDatas}</strong> <strong>Enrollment Data</strong> from {enrollment.enrollmentCenter} center, {enrollment.county} County</p>
                    <div className="content-small-text">
                      <small>
                        {/* Reat Time Ago */}
                        <TimeAgo
                          datetime={Date.now()}
                        />
                      </small>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}

          {/* Project Activities */}
          {
            projectPostNotifications.filter(project => project.userName === user.UserName).map(project => (
              <div className="contents">
                <div className="contents-items">
                  {showUsers.filter(img => img.userName === user.userName).map(img => (
                    <div className="content-img">
                      <img src={`http://localhost:5000/images/${img.photo}`}
                        alt={img.firstName}
                        width={"40px"}
                        style={{ borderRadius: "50%" }} />
                    </div>
                  ))}
                  <div className="content-text">
                    <p><strong>{`${project.firstName} ${project.lastName}`}</strong> send in <strong>{project.totalDatas}</strong> <strong>Project Data</strong> from {project.enrollmentCenter} Center, {project.county} County</p>
                    <div className="content-small-text">
                      {/* Reat Time Ago */}
                      <small>
                        <TimeAgo
                          datetime={Date.now()}
                        />
                      </small>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
        </div>
      </section>
      {/* End of Map & Activities Section */}

      {/* Team Lead Section */}
      <section className="team-lead">
        <h3>NIR Users Directory</h3>
        <GridJS />
      </section>
    </React.Fragment >
  );
};

export default MainContents;
