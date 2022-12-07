import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import MainFooter from "../MainFooter/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      {/* Header Section */}
      <Navbar />
      {/* End of Header Section */}

      {/* Main Section */}
      <main>
        <div className="banner">
          <img
            src={"/profile-img/background.jpg"}
            alt=""
            width={"1000px"}
            height={"400px"}
          />
        </div>
      </main>
      {/* End of Main Section */}

      {/* Footer Section */}
      <MainFooter />
      {/* End of Footer Section */}
    </React.Fragment>
  );
};

export default Home;
