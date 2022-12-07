import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./UpdateProjectData.css";

// React Sweet Alert Initializtion
const MySwal = withReactContent(Swal);

const UpdateProjectData = ({ socket }) => {
  const [project, showProject] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${id}`).then((data) => {
      showProject(data.data);
    });
  }, [id]);

  // Update User
  const updateData = () => {
    axios.patch(`http://localhost:5000/projects/${id}`, project).then((data) => {
      showProject(data.data);
    });
  };

  // Sweet Alert
  const updateDataSuccessLink = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "Data updated submitted!",
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
      <div id="update-project-data-wrapper">
        <h5>Update Project Data</h5>
        {/* PureCSS Form */}
        <form className="pure-form pure-form-stacked" onSubmit={updateData}>
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
                  value={project.lastName}
                  onChange={(e) =>
                    showProject({ ...project, lastName: e.target.value })
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
                  value={project.firstName}
                  onChange={(e) =>
                    showProject({ ...project, firstName: e.target.value })
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
                  value={project.middleName}
                  onChange={(e) =>
                    showProject({ ...project, middleName: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label>County:</label>
                <select
                  id="county"
                  className="pure-u-23-24"
                  value={project.county}
                  onChange={(e) =>
                    showProject({ ...project, county: e.target.value })
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
                  value={project.enrollmentCenter}
                  onChange={(e) =>
                    showProject({
                      ...project,
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
                <label htmlFor="user-name">Project Name:</label>
                <input
                  type="text"
                  id="user-name"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Use Email"
                  value={project.projectName}
                  onChange={(e) =>
                    showProject({ ...project, projectName: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="user-name">Number of Projects:</label>
                <input
                  type="number"
                  id="user-name"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Use Email"
                  value={project.numberOfProjects}
                  onChange={(e) =>
                    showProject({ ...project, numberOfProjects: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="user-name">Total Males:</label>
                <input
                  type="number"
                  id="user-name"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Use Email"
                  value={project.totalMales}
                  onChange={(e) =>
                    showProject({ ...project, totalMales: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="total-males">Total Females:</label>
                <input
                  type="number"
                  id="total-females"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Enter Password"
                  value={project.totalFemales}
                  onChange={(e) =>
                    showProject({ ...project, totalFemales: e.target.value })
                  }
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="confirm-password">Total Data:</label>
                <input
                  type="number"
                  id="total-data"
                  className="pure-u-23-24"
                  required=""
                  placeholder="Re-Enter Password"
                  value={
                    (project.totalDatas =
                      Number(project.totalMales) +
                      Number(project.totalFemales))
                  }
                  onChange={(e) =>
                    showProject({
                      ...project,
                      totalDatas: e.target.value,
                    })
                  }
                />
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

export default UpdateProjectData;
