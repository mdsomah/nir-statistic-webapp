import React, { useRef } from 'react';
// import axios from 'axios';
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import * as FlexmonsterReact from 'react-flexmonster';


import "./AllEnrollment.css";
import "./Toolbar.css";


const AllEnrollment = ({ socket }) => {
  const ref = useRef();

  const onReportComplete = () => {
    console.log(">>>>", ref.current.flexmonster.getReport());
  }



  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="all-reports-wrapper">
        <h5>Enrollment Reports</h5>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.flexmonster.com/theme/stripedblue/flexmonster.min.css"
        />
        <div className="demo-toolbar" id="buttons-toolbar">
          <a
            className="btn-theme striped-lightblue btn-active"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/stripedblue/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">Sb</span>
            <span className="theme-name">Striped-Blue</span>
          </a>
          <a
            className="btn-theme striped-teal"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/stripedteal/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">ST</span>
            <span className="theme-name">Striped-Teal</span>
          </a>
          <a
            className="btn-theme purple"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/purple/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">Pu</span>
            <span className="theme-name">Purple</span>
          </a>
          <a
            className="btn-theme black-orange"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/blackorange/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">Bo</span>
            <span className="theme-name">Black-Orange</span>
          </a>
          <a
            className="btn-theme bright-orange"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/brightorange/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">Or</span>
            <span className="theme-name">Bright-Orange</span>
          </a>
          <a
            className="btn-theme yellow"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/yellow/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">Ye</span>
            <span className="theme-name">Yellow</span>
          </a>
          <a
            className="btn-theme green"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/green/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">Ge</span>
            <span className="theme-name">Green</span>
          </a>
          <a
            className="btn-theme midnight"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/midnight/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">MN</span>
            <span className="theme-name">Midnight</span>
          </a>
          <a
            className="btn-theme mac-os"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/macos/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">Mo</span>
            <span className="theme-name">Mac OS</span>
          </a>
          <a
            className="btn-theme soft-default"
            onClick={() =>
              setTheme(
                "https://cdn.flexmonster.com/theme/softdefault/flexmonster.min.css"
              )
            }
          >
            <span className="theme-name-short">SD</span>
            <span className="theme-name">Soft-Default</span>
          </a>
        </div>
        <FlexmonsterReact.Pivot
          ref={ref}
          toolbar={true}
          beforetoolbarcreated={toolbar => {
            toolbar.showShareReportTab = true;
          }}
          shareReportConnection={{
            url: "http://localhost:5000/reports"
          }}
          width="100%"
          reportcomplete={onReportComplete}
          licenseKey="Z719-X9FA03-3C1T5I-5C0H17"
          report={{
            dataSource: {
              type: "api",
              url: "http://localhost:5000/reports",
              index: "datas"
            },
            options: {
              grid: {
                // type: "flat",
                title: "NIR Regular Enrollment Reports",
              }
            }
          }}
        />
      </div>
      <Sidebar />
    </React.Fragment>
  );
};

// Toolsbar Config
let setTheme = (cssUrl) => {
  var prevThemeTags = getPrevTheme();
  var link = document.createElement("link");
  link.href = cssUrl;
  link.rel = "stylesheet";
  link.type = "text/css";
  link["onload"] = function () {
    if (prevThemeTags != null) {
      for (let i = 0; i < prevThemeTags.length; i++) {
        if (window.ActiveXObject || "ActiveXObject" in window) {
          prevThemeTags[i].removeNode(true);
        } else {
          prevThemeTags[i].remove();
        }
      }
    }
  };
  document.body.appendChild(link);
};

let getPrevTheme = () => {
  var linkTags = document.head.getElementsByTagName("link");
  var prevThemeTags = [];
  for (let i = 0; i < linkTags.length; i++) {
    if (
      linkTags[i].href.indexOf("flexmonster.min.css") > -1 ||
      linkTags[i].href.indexOf("flexmonster.css") > -1
    ) {
      prevThemeTags.push(linkTags[i]);
    }
  }
  linkTags = document.body.getElementsByTagName("link");
  for (let i = 0; i < linkTags.length; i++) {
    if (
      linkTags[i].href.indexOf("flexmonster.min.css") > -1 ||
      linkTags[i].href.indexOf("flexmonster.css") > -1
    ) {
      prevThemeTags.push(linkTags[i]);
    }
  }
  return prevThemeTags;
};




export default AllEnrollment;
