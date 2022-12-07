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

const NotificationEnrollment = ({ socket }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useContext(AuthContext);
  // const [userImage, setUserImage] = useState([]);
  const [enrollmentNotificationResult, setEnrollmentNotificationResult] = useState({});

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

  // Enrollment Notification ByID Routes
  useEffect(() => {
    axios.get(`http://localhost:5000/datas/${params.id}`).then((allEnrollmentData) => {
      setEnrollmentNotificationResult(allEnrollmentData.data);
    })
  }, [params.id])



  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="show-notification" className="notification-wrapper">
        <h5>Enrollment Notification</h5>
        <div className="notification-wrapper-items">
          <>
            <div className="notification-wrapper-img">
              <img src={`http://localhost:5000/images/${user.photo}`}
                alt={user.firstName}
                width={"50px"}
                style={{ borderRadius: "50%" }} />
            </div>
            {/* Enrollment Map Data */}
            <div className="notification-wrapper-content">
              <p><strong>{`${enrollmentNotificationResult.firstName} ${enrollmentNotificationResult.lastName}`}</strong> send in <strong>{enrollmentNotificationResult.totalDatas}</strong> <strong>Enrollment Data</strong> from {enrollmentNotificationResult.enrollmentCenter} Center, {enrollmentNotificationResult.county} County</p>
              <div className="notification-wrapper-text-small">
                <small>
                  {/* React Time Ago */}
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
            {/* Enrollment Map Data */}
            <tr>
              <td>{enrollmentNotificationResult.county}</td>
              <td>{enrollmentNotificationResult.enrollmentCenter}</td>
              <td>{enrollmentNotificationResult.totalMales}</td>
              <td>{enrollmentNotificationResult.totalFemales}</td>
              <td>{enrollmentNotificationResult.totalDatas}</td>
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

export default NotificationEnrollment