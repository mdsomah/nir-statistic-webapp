import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContents from "./components/MainContents/MainContents";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js"
import "bootstrap/dist/js/bootstrap.js";
// Socket.IO Client
// import socketIO from 'socket.io-client';

// Init Socket Client
// Socket Init
// const socket = socketIO.connect('http://localhost:5000');


const App = ({ socket }) => {

  return (
    <>
      <Header socket={socket} />
      <Sidebar />
      <div id="wrapper">
        <MainContents socket={socket} />
        <Footer />
      </div>
    </>
  );
};

export default App;
