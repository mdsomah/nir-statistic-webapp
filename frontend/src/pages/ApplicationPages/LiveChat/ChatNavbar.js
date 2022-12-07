import React from 'react'
import { Navbar } from "react-chat-elements";

const ChatNavbar = () => {
  return (
    <React.Fragment>
      <Navbar
        left="Meeting"
        center="Home"
        right="Contact"
        type="dark"
      />
    </React.Fragment>
  )
}

export default ChatNavbar