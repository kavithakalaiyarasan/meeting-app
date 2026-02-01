import React from 'react'
import './schedule.css'

function Schedule() {
  return (
    <div className='schedule-page'>
        <h2 className="title">Connectify</h2>
        <div className="schedule-card">
            <h3>Schedule Meeting</h3>
                <div className="meet-id">
                <h4>Your Meeting ID</h4>
                    <strong>connectify-839-234</strong>
                </div>
                <label htmlFor="date">Date</label>
                <input type="date" /><br />
                <label htmlFor="time">Time</label>
                <input type="time" /><br />
                <button>Schedule</button>

        </div>
    </div>
  )
}

export default Schedule