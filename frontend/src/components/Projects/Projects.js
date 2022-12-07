import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import Header from "../Header/Header";
import { Scrollbars } from "react-custom-scrollbars";

// React Tippy.JS
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import "./Projects.css";

const Projects = ({ socket }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // const [userImage, setUserImage] = useState([]);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((response) => {
      setProjects(response.data);
    })
  }, [])

  // Back To Home Page
  const backToDashboard = () => {
    navigate("/dashboard", { replace: true });
  }

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="projects-wrapper">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <h5>All Projects</h5>
          <Tippy content="Back to Dashboard" placement="top">
            <button className="back-button project-back-button" onClick={backToDashboard}>Back</button>
          </Tippy>
          <h3>Projects Summary Preview</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Projects</th>
                <th scope="col">Project Name</th>
                <th scope="col">County</th>
                <th scope="col">Center</th>
                <th scope="col">Males</th>
                <th scope="col">Females</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {projects.filter((data, key) => data.county === "Montserrado").map((data, key) => (
                <tr key={key}>
                  <td>{data.numberOfProjects}</td>
                  <td>{data.projectName}</td>
                  <td>{data.county}</td>
                  <td>{data.enrollmentCenter}</td>
                  <td>{data.totalMales}</td>
                  <td>{data.totalFemales}</td>
                  <td>{data.totalDatas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Scrollbars>
      </div>
    </React.Fragment>
  )
}

export default Projects