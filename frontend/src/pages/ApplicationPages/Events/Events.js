import React from 'react';
import Header from "../../../components/Header/Header";
import Sidebar from '../../../components/Sidebar/Sidebar';
// import ReactBigCalendar from '../../../components/CalendarComponents/ReactBigCalendar/ReactBigCalendar';
import ReactScheduler from '../../../components/CalendarComponents/ReactScheduler/ReactScheduler';

import "./Events.css";


const Events = ({ socket }) => {

  return (
    <React.Fragment>
      <Header socket={socket} />
      <Sidebar />
      <div id='events-wrapper'>
        <h5>Create Events</h5>
        {/* <ReactBigCalendar /> */}
        <ReactScheduler />
      </div>
    </React.Fragment>
  )
}

export default Events;
