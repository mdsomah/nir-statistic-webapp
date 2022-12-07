import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import "./Footer.css";

// React Tippy.JS
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const Footer = () => {
  return (
    <React.Fragment>
      <div id="footer">
        <div className="copyright">
          <p>&copy;2022 NIR. All rights reserved.</p>
        </div>
        <div className="developer">
          <p>
            Build and Design By:{" "}
            <strong>
              <a href="https://mdsomah.netlify.app/" target={"_blank"}>
                Mesheal D. Somah Sr.
              </a>
            </strong>
          </p>
        </div>
        <div className="social">
          <span>
            <em>Follow Me: </em>
            <Tippy content="Facebook">
              <span className="facebook">
                <FaFacebook />
              </span>
            </Tippy>
            <Tippy content="LinkedIn">
              <span className="linkedin">
                <FaLinkedin />
              </span>
            </Tippy>
            <Tippy content="Twitter">
              <span className="twitter">
                <FaTwitter />
              </span>
            </Tippy>
            <Tippy content="GitHub">
              <span className="github">
                <FaGithub />
              </span>
            </Tippy>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
