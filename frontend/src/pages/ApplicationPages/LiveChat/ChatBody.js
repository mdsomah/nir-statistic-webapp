import React, { useState, useEffect, useContext } from 'react';
// import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { MessageBox, ChatItem } from "react-chat-elements";
// import ChatFooter from './ChatFooter';
import axios from 'axios';

const ChatBody = ({ selectSingleUser, publicMessage, lastMessageRef, typingStatus }) => {
  // const params = useParams();
  const { isAuthenticated, user } = useContext(AuthContext);
  // const [currentUser, setCurrentUser] = useState({});

  // console.log(selectSingleUser)

  // Get Single User By ID
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/users/${params.id}`).then((singleUser) => {
  //     setCurrentUser(singleUser.data);
  //   })
  // }, [params.id])


  return (
    <React.Fragment>
      <div id='chat-body-zero' className='chat-body'>
        {selectSingleUser &&
          < ChatItem
            avatar={`http://localhost:5000/images/${user.photo}`}
            alt={selectSingleUser.firstName}
            title={`${selectSingleUser.firstName} ${selectSingleUser.middleName}. ${selectSingleUser.lastName}`}
            subtitle={isAuthenticated ? "Online" : "Offline"}
          />
        }
        {publicMessage.map((message) =>
          message.name === user.userName || isAuthenticated ? (
            <MessageBox
              key={message.id}
              position='right'
              title="You"
              type='text'
              text={message.text}
              date={new Date()}
              replyButton={true}
            />) : (
            <MessageBox
              key={message.id}
              position="left"
              title={`${user.firstName} ${user.lastName}`}
              type="text"
              text={message.text}
              date={new Date()}
            />
          ))}
        <div>
          <p>{typingStatus}</p>
          <div ref={lastMessageRef}></div>
        </div>
        {/* <ChatFooter /> */}
      </div>
    </React.Fragment>
  )
};

export default ChatBody;