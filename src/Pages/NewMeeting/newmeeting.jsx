import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewMeeting.css'

function NewMeeting() {
    const navigate = useNavigate()

    const [micOn, setMicOn] = useState(true)
    const [videoOn, setVideoOn] = useState(true)
    const [copylink, setCopylink] = useState(false)

    function handleStartMeeting() {
        navigate('/meeting', {
            state: {
                micOn,
                videoOn
            }
        })
    }


    function handleCopyLink() {
        setCopylink(true)
        setTimeout(() => setCopylink(false), 3000)
    }
    return (
        <div className="newmeeting-page">
            <h2 className="brand-title">Connectify</h2>

            <div className="newmeeting-card">
                <h3>Start a New Meeting</h3>
                <p>Configure your meeting settings and start instantly</p>

                <div className="meeting-id">
                    <span>Meeting ID</span>
                    <strong>connectify-839-234</strong>
                </div>

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

                <div className="action-buttons">
                    <button className="share-btn" onClick={handleCopyLink}>
                        <i className="bx bx-link"></i>
                        {copylink ? 'Copied!' : 'Share Link'}
                    </button>

                    <button className="start-btn" onClick={handleStartMeeting}>
                        Start Meeting
                    </button>
                </div>

            </div>
        </div>
    )
}

export default NewMeeting
