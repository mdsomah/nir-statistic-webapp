import React, { useCallback, useState, useEffect, useMemo } from 'react'
import PropTypes from "prop-types"
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "moment-timezone";
import TimeZone from './resources/TimeZone';
import events from './resources/events';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "react-big-calendar/lib/css/react-big-calendar.css"


// React Sweet Alert Initializtion
const MySwal = withReactContent(Swal);

const localizer = momentLocalizer(moment) // or globalizeLocalizer
// Optional Default Time Zone
const defaultTZ = moment.tz.guess()
// moment.tz.setDefault('Africa/Monrovia')

// function getDate(str, momentObj) {
//   return momentObj(str, 'YYYY-MM-DD').toDate()
// }

let allViews = Object.keys(Views).map((k) => Views[k])


const ReactBigCalendar = ({ dayLayoutAlgorithm = 'no-overlap' }) => {
  const [myEvents, setEvents] = useState(events)
  const [timezone, setTimezone] = useState(defaultTZ)

  // myEvents.map(item => item.title);

  // Sweet Alert
  // const createNewEvent = useCallback(
  //   ({ start, end }) => {
  //     Swal.fire({
  //       title: 'Enter Event Name',
  //       input: 'text',
  //       inputAttributes: {
  //         autocapitalize: 'off'
  //       },
  //       showCancelButton: true,
  //       confirmButtonText: 'Confirm',
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         Swal.fire('Event Created!')
  //         setEvents((prev) => [...prev, { start, end, result }])
  //       }
  //     })
  //   },
  //   [setEvents]
  // );


  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      // const title = createNewEvent();
      const title = window.prompt('Enter New Event Name');
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [setEvents]
  )

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )

  const { defaultDate, getNow, localizer, scrollToTime } = useMemo(
    () => {
      return {
        // defaultDate: getDate(moment),
        defaultDate: new Date(),
        getNow: () => moment().toDate(),
        localizer: momentLocalizer(moment),
        scrollToTime: moment().toDate(),
      }
      // moment.tz.setDefault(timezone)
      // defaultDate: new Date(),
      // scrollToTime: new Date(1970, 1, 1, 6),
    }, []);

  return (
    <React.Fragment>
      <TimeZone
        defaultTZ={defaultTZ}
        setTimezone={setTimezone}
        timezone={timezone}
      />
      <div className="myCustomHeight" style={{ height: "500px" }}>
        <Calendar
          events={myEvents}
          dayLayoutAlgorithm={dayLayoutAlgorithm}
          defaultDate={defaultDate}
          defaultView={Views.MONTH}
          onSelectEvent={handleSelectEvent}
          // onSelectSlot={createNewEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
          localizer={localizer}
          getNow={getNow}
          startAccessor="start"
          endAccessor="end"
          popup
          views={allViews}
        />
      </div>
    </React.Fragment>
  )
}

ReactBigCalendar.propTypes = {
  localizer: PropTypes.instanceOf(momentLocalizer),
  dayLayoutAlgorithm: PropTypes.string,
}

export default ReactBigCalendar;