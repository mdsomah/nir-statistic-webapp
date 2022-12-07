import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext";
import { ChatItem, MeetingItem } from "react-chat-elements";
import { Scrollbars } from "react-custom-scrollbars";


const ChatSidebar = ({ socket }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((allUserData) => {
      setUsers(allUserData.data);
    })
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);


  const selectSingleUser = (e, key) => {
    console.log(e.currentTarget);
    console.log(key);
  }

  return (
    <React.Fragment>
      {users.filter(item => item.photo === user.photo).map((item, key) => (
        <MeetingItem
          key={key}
          subject={"New Calling !"}
          subjectLimit={10}
          date={new Date()}
          avatars={[
            { src: `http://localhost:5000/images/${item.photo}`, },
            { src: `http://localhost:5000/images/${item.photo}`, },
            { src: `http://localhost:5000/images/${item.photo}`, },

          ]}
          onMeetingClick={() => alert("Clicked Join Meeting")}
          onShareClick={() => alert("Clicked Share Meeting")}
        />
      ))}
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={300}>
        {users.map((value, key) => (
          < ChatItem
            key={key}
            avatar={`http://localhost:5000/images/${value.photo}`}
            id={value.socketID}
            alt={value.firstName}
            title={`${value.firstName} ${value.middleName}. ${value.lastName}`}
            subtitle="Hello"
            date={new Date()}
            unread={3}
            onClick={(e) => selectSingleUser(e, key)}
          />
        ))}
      </Scrollbars>
    </React.Fragment>
  );
};

export default ChatSidebar;