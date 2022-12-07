import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
// import { Input } from 'react-chat-elements';

const ChatFooter = ({ socket }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  // Public Messages
  const [publicMessages, setPublicMessages] = useState('');
  // Private Messages
  // const [privateMessages, setPrivateMessage]s = useState('');
  // Current Selected User for Private Messaging
  // const [selectedUser, setSelectedUser] = useState([]);

  // Fetch All Users
  // useEffect(() => {
  //   axios.get("http://localhost:5000/users").then((allUserData) => {
  //     setSelectedUser(allUserData.data);
  //   })
  // }, []);



  // Handle Private Messages
  // const handlePrivateMessages = (e) => {
  //   e.preventDefault();
  //   if (selectedUser[1].firstName === "William") {
  //     socket.emit('message', {
  //       text: privateMessage,
  //       to: selectedUser.userName,
  //       // name: `${user.firstName} ${user.lastName}`,
  //       // id: `${socket.id}${Math.random()}`,
  //       // socketID: socket.id,
  //     });
  //   }
  //   setPrivateMessage('');
  // };

  // Handle Typing
  const handleTyping = () => {
    socket.emit('typing', `${user.firstName} ${user.lastName} is typing`);
  }

  // Handle Public Messages
  const handlePublicMessages = (e) => {
    e.preventDefault();
    if (publicMessages.trim() && isAuthenticated) {
      socket.emit('publicMessage', {
        text: publicMessages,
        name: `${user.firstName} ${user.middleName} ${user.lastName}`,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setPublicMessages('');
  };

  return (
    <React.Fragment>
      <div className='chat-footer'>
        <form className="chat-footer-form" onSubmit={handlePublicMessages}>
          {/* <Input
            placeholder="Type here..."
            multiline={true}
            autoHeight={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleTyping}
          /> */}
          <input
            type="text"
            placeholder="Write message"
            className="message"
            value={publicMessages}
            onChange={(e) => setPublicMessages(e.target.value)}
            onKeyDown={handleTyping}
          />
          <button className="button">SEND</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ChatFooter;