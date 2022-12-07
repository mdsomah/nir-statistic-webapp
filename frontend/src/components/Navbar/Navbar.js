import React from "react";
import { Link } from "react-router-dom";
// import AuthService from "../../Services/AuthService";
// import { AuthContext } from "../../Context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      {/* Header Section */}
      <section>
        <header id="navbar">
          <nav className="main-navbar-items">
            <div className="navbar-items container">
              <div className="logo">
                <Link to="/">
                  <img src={"/nir-logo/nirlogo.png"} alt="" width={"50px"} />
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "#111" }}>
                  <span>Home</span>
                </Link>
                <Link to="/about" style={{ textDecoration: "none", color: "#111" }}>
                  <span>About</span>
                </Link>
              </div>
              <div className="login">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </section>
      {/* End of Header Section */}
    </React.Fragment>
  );
};

export default Navbar;
