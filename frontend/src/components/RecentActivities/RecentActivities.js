import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import Header from '../Header/Header';
import { Scrollbars } from "react-custom-scrollbars";

// React Tippy.JS
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// React Time Ago
import TimeAgo from 'timeago-react';

// Main CSS File
import "./RecentActivities.css";

const RecentActivities = ({ socket, date }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [userImage, setUserImage] = useState([]);
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


  // Fetch User Profile Photo
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      setUserImage(response.data);
    })
  }, [])


  // Back To Home Page
  const backToDashboard = () => {
    navigate("/dashboard", { replace: true });
  }


  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="recent-activities-wrapper">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <h5>All Recent Activities</h5>
          <Tippy content="Back to Dashboard" placement="top">
            <button className="back-button recent-activities-back-button" onClick={backToDashboard}>Back</button>
          </Tippy>
          {/* Enrollment Activities */}
          {enrollmentPostNotifications.filter(enrollment => enrollment.userName === user.UserName).map(enrollment => (
            <Link to={`/notification-enrollment/${enrollment._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="recent-activities-wrapper-items">
                {userImage.filter(img => img.userName === user.userName).map(img => (
                  <div className="recent-activities-wrapper-img">
                    <img src={`http://localhost:5000/images/${img.photo}`}
                      alt={img.firstName}
                      width={"50px"}
                      style={{ borderRadius: "50%" }} />
                  </div>
                ))}
                <div className="recent-activities-wrapper-content">
                  <p><strong>{`${enrollment.firstName} ${enrollment.lastName}`}</strong> send in <strong>{enrollment.totalDatas}</strong> <strong>Enrollment Data</strong> from {enrollment.enrollmentCenter} center, {enrollment.county} county</p>
                  <div className="recent-activities-wrapper-text-small">
                    <small>
                      {/* Reat Time Ago */}
                      <TimeAgo
                        datetime={date}
                      />
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Project Activities */}
          {projectPostNotifications.filter(project => project.userName === user.UserName).map(project => (
            <Link to={`/notification-project/${project._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="recent-activities-wrapper-items">
                {userImage.filter(img => img.userName === user.userName).map(img => (
                  <div className="recent-activities-wrapper-img">
                    <img src={`http://localhost:5000/images/${img.photo}`}
                      alt={img.firstName}
                      width={"50px"}
                      style={{ borderRadius: "50%" }} />
                  </div>
                ))}
                <div className="recent-activities-wrapper-content">
                  <p><strong>{`${project.firstName} ${project.lastName}`}</strong> send in <strong>{project.totalDatas}</strong> <strong>Project Data</strong> from {project.enrollmentCenter} center, {project.county} county</p>
                  <div className="recent-activities-wrapper-text-small">
                    <small>
                      {/* Reat Time Ago */}
                      <TimeAgo
                        datetime={date}
                      />
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Scrollbars>
      </div>
    </React.Fragment>
  )
}

export default RecentActivities