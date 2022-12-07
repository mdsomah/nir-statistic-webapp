import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "./MainFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.js";

const MainFooter = () => {
  return (
    <React.Fragment>
      {/* Footer Section */}
      <section>
        <footer>
          <div id="home-footer">
            <div className="copyright">
              <p>&copy;2022 NIR. All rights reserved.</p>
            </div>
            <div className="developer">
              <p>
                Build and Design By:{" "}
                <strong>
                  <span class="dropup">
                    <span data-bs-toggle="dropdown" aria-expanded="false">
                      Mesheal D. Somah Sr.
                    </span>
                    <div class="dropdown-menu">
                      <div class="card" style={{ width: "18rem" }}>
                        <img src={"/profile-img/mesh.jpg"} className="card-img-top" alt="Developer Profile" />
                        <div class="card-body">
                          <h5 class="card-title">Mesheal D. Somah Sr.</h5>
                          <p class="card-text">Full Stack Designer, Developer, Engineer and Architect</p>
                          <p>Email: dsomah@gmail.com</p>
                          <p>Cell: +231-770-442-816 <br /> +231-886-766-156</p>
                          <div className="profile-social">
                            <span>
                              <span className="facebook">
                                <FaFacebook />
                              </span>
                              <span className="linkedin">
                                <FaLinkedin />
                              </span>
                              <span className="twitter">
                                <FaTwitter />
                              </span>
                              <span className="github">
                                <FaGithub />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </strong>
              </p>
            </div>
            <div className="social">
              <span>
                <em>Follow Me: </em>
                <span className="facebook">
                  <FaFacebook />
                </span>
                <span className="linkedin">
                  <FaLinkedin />
                </span>
                <span className="twitter">
                  <FaTwitter />
                </span>
                <span className="github">
                  <FaGithub />
                </span>
              </span>
            </div>
          </div>
        </footer>
      </section>
      {/* End of Footer Section */}
    </React.Fragment>
  );
};

export default MainFooter;
