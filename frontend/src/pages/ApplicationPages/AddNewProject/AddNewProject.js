import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./AddNewProject.css";

// React Sweet Alert Initializtion
const MySwal = withReactContent(Swal);

const AddNewProject = ({ socket }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [projectData, setProjectData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    title: "",
    county: "",
    enrollmentCenter: "",
    projectName: "",
    numberOfProjects: "",
    totalMales: "",
    totalFemales: "",
    totalDatas: "",
  });

  // Sweet Alert
  const newProjectSuccessLink = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "Data successfully submitted!",
      showConfirmButton: false,
      timer: 5000,
    });
  };

  // Check user Authentication
  // Fetch Data
  const [userData, showUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((allData) => {
      showUserData(allData.data);
      console.log(allData.data);
    });
  }, []);

  // Post New Project data
  const handleSubmitData = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      axios.post("http://localhost:5000/projects", projectData).then((response) => {
        console.log(response);
        newProjectSuccessLink();
        window.location.reload(false);
        socket.emit("newProjectPost", { projectData, user, socketID: socket.id });
      });
    }
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
      <div id="add-new-project-wrapper">
        <h5>Add New Project Data</h5>
        {userData.filter(data => data.userName === user.userName).map(data => (
          <form
            className="form-group pure-form pure-form-aligned"
            onSubmit={handleSubmitData}
          >
            <div className="last-name pure-control-group ">
              <label htmlFor="">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                value={projectData.lastName = data.lastName}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="first-name pure-control-group ">
              <label htmlFor="">First Name:</label>
              <input
                type="text"
                placeholder="Enter First Name"
                value={projectData.firstName = data.firstName}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="middle-name pure-control-group">
              <label htmlFor="">Middle Name:</label>
              <input
                type="text"
                placeholder="Enter Middle Name"
                value={projectData.middleName = data.middleName}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    middleName: e.target.value,
                  })
                }
              />
            </div>
            <div className="title pure-control-group">
              <label htmlFor="">Title:</label>
              <input
                type="text"
                placeholder="Enter Title"
                value={projectData.title = data.title}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="county-name pure-control-group">
              <label htmlFor="">County:</label>
              <select
                id="county"
                className="pure-u-23-24"
                value={projectData.county = data.county}
                onChange={(e) =>
                  setProjectData({ ...projectData, county: e.target.value })
                }
              >
                <option selected>Select County</option>
                {countyOptions.map((countyOption) => (
                  <option value={countyOption.value}>{countyOption.label}</option>
                ))}
              </select>
            </div>
            <div className="center-name pure-control-group">
              <label htmlFor="">Enrollment Center:</label>
              <select
                id="enrollment-center"
                className="pure-u-23-24"
                value={projectData.enrollmentCenter = data.enrollmentCenter}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    enrollmentCenter: e.target.value,
                  })
                }
              >
                <option selected>Select Center</option>
                {centerOptions.map((centerOption) => (
                  <option value={centerOption.value}>{centerOption.label}</option>
                ))}
              </select>
            </div>
            <div className="first-name pure-control-group ">
              <label htmlFor="">Project Name:</label>
              <input
                type="text"
                placeholder="Enter Project Name"
                required
                value={projectData.projectName}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectName: e.target.value,
                  })
                }
              />
            </div>
            <div className="first-name pure-control-group ">
              <label htmlFor="">Number of Projects:</label>
              <input
                type="number"
                placeholder="Enter # of Projects"
                required
                value={projectData.numberOfProjects}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    numberOfProjects: e.target.value,
                  })
                }
              />
            </div>
            <div className="data pure-control-group pure-u-1-3">
              <label htmlFor="">Add Data:</label>
              <input
                type="number"
                placeholder="Enter # of Males"
                className="pure-u-23-24"
                required
                value={projectData.totalMales}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    totalMales: e.target.value,
                  })
                }
              />
            </div>
            <div className="data pure-control-group pure-u-1-3">
              <input
                type="number"
                placeholder="Enter # of Females"
                className="pure-u-23-24"
                required
                value={projectData.totalFemales}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    totalFemales: e.target.value,
                  })
                }
              />
            </div>
            <div className="data pure-control-group pure-u-1-3">
              <input
                id="total"
                type="number"
                placeholder="Total Data"
                className="pure-u-23-24"
                value={
                  (projectData.totalDatas =
                    Number(projectData.totalMales) +
                    Number(projectData.totalFemales))
                }
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    totalDatas: e.target.value,
                  })
                }
              />
            </div>
            <div className="submit" >
              <button
                className="pure-button pure-button-primary pure-button-active"
              >
                Send
              </button>
            </div>
          </form>
        ))
        }
      </div >
      <Sidebar />
    </React.Fragment >
  );
};

export default AddNewProject;
