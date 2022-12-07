import React from 'react'
import PropTypes from 'prop-types'
// import Layout from 'react-tackle-box/Layout'
import moment from 'moment'
import 'moment-timezone'

const allZones = moment.tz.names()
allZones.unshift('clear')

const TimeZone = ({ title, defaultTZ = moment.tz.guess(), timezone, setTimezone, }) => {
  const onChange = ({ target: { value } }) =>
    setTimezone(value ? value : defaultTZ);

  return (
    <React.Fragment>
      <div style={{ marginBottom: "15px" }}>
        <div direction="row" align="center">
          {title ? <strong style={{ marginBottom: 10 }}>{title}</strong> : null}
          <label style={{ marginRight: "10px" }}>Select a Timezone:</label>
          <select
            className="form-control"
            style={{ width: 200, display: 'inline-block' }}
            value={timezone}
            onChange={onChange}
          >
            {allZones.map((c, idx) => (
              <option key={idx} value={c !== 'clear' ? c : ''}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </React.Fragment>
  )
}

TimeZone.propTypes = {
  title: PropTypes.string,
  defaultTZ: PropTypes.string,
  timezone: PropTypes.string,
  setTimezone: PropTypes.func,
}

export default TimeZone;