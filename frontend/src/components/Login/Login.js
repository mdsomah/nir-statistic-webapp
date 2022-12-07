import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import Navbar from "../Navbar/Navbar";
import MainFooter from "../MainFooter/MainFooter";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BsFillLockFill, BsFillPersonFill } from "react-icons/bs";
import "./Login.css";


// React Sweet Alert Initializtion
const MyFiller = withReactContent(Swal);
const MySuccess = withReactContent(Swal);

const Login = ({ socket }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });

  console.log(user);


  // Sweet Alert
  const fillLogin = () => {
    MyFiller.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid Username or Password!',
    });
  };

  // Sweet Alert
  const successLogin = () => {
    MySuccess.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You have successfully login',
      showConfirmButton: false,
      timer: 3000
    })
  };

  // Clear Form input fields
  function clearFields(event) {
    Array.from(event.target).forEach((e) => (e.value = ""));
  }

  // Login User
  const handleUserLogin = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        //sends the username and socket ID to the Node.js server
        // socket.emit('newUser', { user, socketID: socket.id });
        navigate("/dashboard", { replace: true });
        successLogin();
      } else {
        clearFields(e)
        setUser("")
        return fillLogin()
      };
    });
  };


  return (
    <React.Fragment>
      <Navbar />
      <div id="login-wrapper" className="container">
        <h1>Sign in</h1>
        <form
          onSubmit={handleUserLogin}
          className="pure-form pure-form-stacked"
        >
          <div>
            <span className="person"><BsFillPersonFill size={"20px"} /></span>
            <label htmlFor="username">Username:</label>
            <input
              className="pure-u-23-24"
              id="username"
              name="username"
              type="email"
              required
              placeholder="Enter Email... "
              value={user.Username}
              onChange={(e) => setUser({ ...user, Username: e.target.value })}
            />
          </div>
          <div>
            <span className="lock"><BsFillLockFill size={"20px"} /></span>
            <label htmlFor="current-password">Password:</label>
            <input
              className="pure-u-23-24"
              id="current-password"
              name="password"
              type="password"
              required
              placeholder="Enter Password..."
              value={user.Password}
              onChange={(e) => setUser({ ...user, Password: e.target.value })}
            />
          </div>
          <button className="button">Sign in</button>
        </form>
      </div>
      <MainFooter />
    </React.Fragment>
  );
};

export default Login;
