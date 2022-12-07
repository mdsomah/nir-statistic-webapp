import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import socketIO from 'socket.io-client';
import "./index.css";
// import "webdatarocks/webdatarocks.css";
import "flexmonster/flexmonster.css";
import AuthProvider from "./Context/AuthContext";
// import { AuthContext } from "./Context/AuthContext";

// All Routes For Application Pages
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AddNewEnrollment from "./pages/ApplicationPages/AddNewEnrollment/AddNewEnrollment";
import AddNewProject from "./pages/ApplicationPages/AddNewProject/AddNewProject";
import CreateNewUser from "./pages/ApplicationPages/CreateNewUser/CreateNewUser";
import Events from "./pages/ApplicationPages/Events/Events";
import LiveChat from "./pages/ApplicationPages/LiveChat/LiveChat";
import ManageEnrollment from "./pages/ApplicationPages/ManageEnrollment/ManageEnrollment";
import ManageProject from "./pages/ApplicationPages/ManageProject/ManageProject";
import ManageUser from "./pages/ApplicationPages/ManageUser/ManageUser";
import UpdateEnrollmentData from "./pages/ApplicationPages/UpdateEnrollmentData/UpdateEnrollmentData";
import UpdateProjectData from "./pages/ApplicationPages/UpdateProjectData/UpdateProjectData";
import UpdateUser from "./pages/ApplicationPages/UpdateUser/UpdateUser";
import AddUsersRole from "./pages/ApplicationPages/AddUsersRole/AddUsersRole";
import ManageUsersRole from "./pages/ApplicationPages/ManageUsersRole/ManageUsersRole";
import UpdateUsersRole from "./pages/ApplicationPages/UpdateUsersRole/UpdateUsersRole";
import UserProfile from "./components/UserProfile/UserProfile";
import About from "./components/About/About";
import RecentActivities from "./components/RecentActivities/RecentActivities";

// All Routes For Reports Pages
import AllEnrollment from "./pages/ReportsPages/AllEnrollment/AllEnrollment";
import Projects from "./components/Projects/Projects";
import NotificationProject from "./components/Notification/NotificationProject/NotificationProject";
import NotificationEnrollment from "./components/Notification/NotificationEnrollment/NotificationEnrollment";
// import ChatBody from "./pages/ApplicationPages/LiveChat/ChatBody";

// Time Ago
// import TimeAgo from 'javascript-time-ago';
// import en from 'javascript-time-ago/locale/en.json'
// import ru from 'javascript-time-ago/locale/ru.json'
// Initialize Local Time
// TimeAgo.addDefaultLocale(en)
// TimeAgo.addLocale(ru)

// const { user, isAuthenticated } = AuthContext;

// Socket Init
const socket = socketIO.connect('http://localhost:5000');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route
          exact
          path="/"
          roles={["user", "Super Admin"]}
          element={
            <UnPrivateRoute>
              <Home />
            </UnPrivateRoute>
          }
        />
        <Route
          exact
          path="/login"
          roles={["user", "Super Admin"]}
          element={
            <UnPrivateRoute>
              <Login />
            </UnPrivateRoute>
          }
        />
        <Route
          exact
          path="/dashboard"
          roles={["user", "Super Admin"]}
          element={
            <PrivateRoute>
              <App socket={socket} />
            </PrivateRoute>
          }
        />
        {/* Application Pages Routes */}
        <Route
          exact
          path="/add-new-enrollment"
          roles={["user", "Super Admin"]}
          element={
            <PrivateRoute>
              <AddNewEnrollment socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/add-new-project"
          roles={["user", "Super Admin"]}
          element={
            <PrivateRoute>
              <AddNewProject socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/create-new-user"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <CreateNewUser socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/events"
          roles={["user", "Super Admin"]}
          element={
            <PrivateRoute>
              <Events socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/live-chat"
          roles={["user", "Super Admin"]}
          element={
            <PrivateRoute>
              <LiveChat socket={socket} />
            </PrivateRoute>
          }
        />
        {/* <Route
          exact
          path="/chat-body/:id"
          roles={["user", "Super Admin"]}
          element={
            <PrivateRoute>
              <ChatBody socket={socket} />
            </PrivateRoute>
          }
        /> */}
        <Route
          exact
          path="/manage-enrollment"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <ManageEnrollment socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/manage-project"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <ManageProject socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/manage-user"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <ManageUser socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/update-enrollment-data/:id"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <UpdateEnrollmentData socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/update-project-data/:id"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <UpdateProjectData socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/update-user/:id"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <UpdateUser socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/add-users-role"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <AddUsersRole socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/manage-users-role"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <ManageUsersRole socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/update-users-role/:id"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <UpdateUsersRole socket={socket} />
            </PrivateRoute>
          }
        />
        {/* End of Application Pages Routes */}

        {/* Reports Pages Routes */}
        <Route
          exact
          path="/all-enrollment-reports"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <AllEnrollment socket={socket} />
            </PrivateRoute>
          }
        />
        {/* End of Reports Pages Routes */}

        {/* User Profile Route */}
        <Route
          exact
          path="/user-profile"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <UserProfile socket={socket} />
            </PrivateRoute>
          }
        />
        {/* End of User Profile Route */}

        {/* Notification Route */}
        <Route
          exact
          path="/notification-enrollment/:id"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <NotificationEnrollment socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/notification-project/:id"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <NotificationProject socket={socket} />
            </PrivateRoute>
          }
        />
        {/* End of Notification Route */}

        {/* Recent Activities Route */}
        <Route
          exact
          path="/recent-activities"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <RecentActivities socket={socket} />
            </PrivateRoute>
          }
        />
        {/* End of Recent Activities Route */}

        {/* Projects Route */}
        <Route
          exact
          path="/projects"
          roles={["Super Admin"]}
          element={
            <PrivateRoute>
              <Projects socket={socket} />
            </PrivateRoute>
          }
        />
        {/* End of Projects Route */}

        {/* About Route */}
        <Route
          exact
          path="/about"
          roles={["user", "Super Admin"]}
          element={
            <UnPrivateRoute>
              <About />
            </UnPrivateRoute>
          }
        />
        {/* End of About Route */}
      </Routes>
    </AuthProvider>
  </Router>
);
