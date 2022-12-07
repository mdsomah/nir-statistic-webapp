import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
// import { Navbar } from "react-chat-elements";
// import ReactChatElements from "./ReactChatElements";
import ChatNavbar from "./ChatNavbar";
import ChatSidebar from "./ChatSidebar";
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import "./LiveChat.css";
import "react-chat-elements/dist/main.css";


const LiveChat = ({ socket }) => {
  const [publicMessage, setPublicMessage] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);


  // Listen to messages from the Server
  useEffect(() => {
    socket.on('publicMessageResponse', (data) => setPublicMessage([...publicMessage, data]));
  }, [socket, publicMessage]);

  // Scroll Down
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [publicMessage]);

  // Typing Event
  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="live-chat" >
        <h5>Live Chat</h5>
        {/* <Navbar
          left="Logo"
          center="Home"
          right="Contact"
          type="dark"
        />
        <ReactChatElements /> */}
        <ChatNavbar />
        <div className="side-center">
          <div className="chat-sidebar">
            <ChatSidebar
              socket={socket}
            // publicMessage={publicMessage}
            />
          </div>
          <div className="chat-body">
            <ChatBody
              publicMessage={publicMessage}
              typingStatus={typingStatus}
              lastMessageRef={lastMessageRef}
            />
            <ChatFooter socket={socket} className="footer" />
          </div>
        </div>
      </div>
      <Sidebar />
    </React.Fragment >
  );
};

export default LiveChat;
