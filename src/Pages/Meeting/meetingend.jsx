import React from 'react'
import { useNavigate } from 'react-router-dom'
import './meetingend.css'

function MeetingEnd() {
  const navigate = useNavigate()

  return (
    <div className="ended-page">
      <div className="ended-card">

        <h1>Meeting Ended</h1>
        <p>
          Thank you for using <strong>Connectify</strong> 💙  
          <br />
          We hope your meeting was productive and smooth.
        </p>

        
          <button onClick={() => navigate('/')}>
            Back to Home
          </button>
        

      </div>
    </div>
  )
}

export default MeetingEnd
