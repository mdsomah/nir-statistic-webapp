import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import Header from "../../Header/Header";

// React Tippy.JS
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// React Time Ago
import TimeAgo from 'timeago-react';

import "../Notification.css"

const NotificationProject = ({ socket }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useContext(AuthContext);
  // const [userImage, setUserImage] = useState([]);
  const [projectNotificationResult, setProjectNotificationResult] = useState({});

  console.log(params)

  // Back To Home Page
  const backToDashboard = () => {
    navigate("/dashboard", { replace: true });
  }

  // useEffect(() => {
  //   axios.get("http://localhost:5000/users").then((response) => {
  //     setUserImage(response.data);
  //   })
  // }, [])


  // Project Notification ByID Routes
  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${params.id}`).then((allProjectData) => {
      setProjectNotificationResult(allProjectData.data);
    })
  }, [params.id])


  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="show-notification" className="notification-wrapper">
        <h5>Project Notification</h5>
        <div className="notification-wrapper-items">
          <>
            <div className="notification-wrapper-img">
              <img src={`http://localhost:5000/images/${user.photo}`}
                alt={user.firstName}
                width={"50px"}
                style={{ borderRadius: "50%" }} />
            </div>
            {/* Project Map Data */}
            <div className="notification-wrapper-content">
              <p><strong>{`${projectNotificationResult.firstName} ${projectNotificationResult.lastName}`}</strong> send in <strong>{projectNotificationResult.totalDatas}</strong> <strong>Project Data</strong> from {projectNotificationResult.enrollmentCenter} Center, {projectNotificationResult.county} County</p>
              <div className="notification-wrapper-text-small">
                <small>
                  {/* Reat Time Ago */}
                  <TimeAgo
                    datetime={Date.now()}
                  />
                </small>
              </div>
            </div>
          </>
        </div>
        <h3>Data Summary Preview</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">County</th>
              <th scope="col">Center</th>
              <th scope="col">Males</th>
              <th scope="col">Females</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {/* Project Map Data */}
            <tr>
              <td>{projectNotificationResult.county}</td>
              <td>{projectNotificationResult.enrollmentCenter}</td>
              <td>{projectNotificationResult.totalMales}</td>
              <td>{projectNotificationResult.totalFemales}</td>
              <td>{projectNotificationResult.totalDatas}</td>
            </tr>
          </tbody>
        </table>
        <Tippy content="Back to Dashboard" placement="right">
          <button className="back-button notification-back-button" onClick={backToDashboard}>Back</button>
        </Tippy>
      </div>
    </React.Fragment>
  )
}

export default NotificationProject