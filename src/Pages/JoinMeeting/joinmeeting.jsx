import React, { useState } from 'react'
import './joinmeeting.css'
import { useNavigate } from 'react-router-dom'

function JoinMeeting() {
  const navigate = useNavigate()

  const [link, setLink] = useState('')
  const [micOn, setMicOn] = useState(true)
  const [videoOn, setVideoOn] = useState(true)

  function handleJoin() {
    if (!link.trim()) return
    navigate('/meeting',{
        state: {
            micOn,
            videoOn
        }
    })
  }

  return (
    <div className="join-page">
      <h2>Connectify</h2>
      <div className="join-card">

        <h2>Join a Meeting</h2>
        <p>Enter the meeting link to join</p>

        <input
          type="text"
          placeholder="Enter meeting link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <div className="media-controls">
          <button
            className={micOn ? 'active' : ''}
            onClick={() => setMicOn(!micOn)}
          >
            <i className={`bx ${micOn ? 'bx-microphone' : 'bx-microphone-off'}`}></i>
            Mic
          </button>

          <button
            className={videoOn ? 'active' : ''}
            onClick={() => setVideoOn(!videoOn)}
          >
            <i className={`bx ${videoOn ? 'bx-video' : 'bx-video-off'}`}></i>
            Video
          </button>
        </div>

        <button className="join-btn" onClick={handleJoin}>
          Join Now
        </button>

      </div>
    </div>
  )
}

export default JoinMeeting
