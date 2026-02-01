import React, { useState, useEffect, useRef } from 'react'
import './Meeting.css'
import { useNavigate, useLocation } from 'react-router-dom'

function Meeting() {
  const navigate = useNavigate()
  const location = useLocation()

  const [micOn, setMicOn] = useState(
    location.state?.micOn ?? true
  )
  const [videoOn, setVideoOn] = useState(
    location.state?.videoOn ?? false
  )

  const [seconds, setSeconds] = useState(0)

  /* ---------- Timer ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(count => count + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = () => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0')
    const sec = String(seconds % 60).padStart(2, '0')
    return `${min}:${sec}`
  }

  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const audioStreamRef=useRef(null)
  
  //  ---------- Mic ---------- 


  const startMic=async()=>{
    try{
      const stream=await navigator.mediaDevices.getUserMedia({
        audio: true
      })
      audioStreamRef.current = stream
    } catch(error){
      console.error('Microphone access denied',error)
    }
  }

  const stopMic=()=>{
    if(audioStreamRef.current){
      audioStreamRef.current.getTracks().forEach(track=>track.stop())
    }
  }
  useEffect(()=>{
    if(micOn){
      startMic()
    }else{
      stopMic()
    }return ()=>stopMic()
  },[micOn])

  // -------------Camera---------------

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error('Camera access denied', error)
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
  }

  useEffect(() => {
    if (videoOn) {
      startCamera()
    } else {
      stopCamera()
    }

    return () => stopCamera()
  }, [videoOn])

  return (
    <div className="meeting-page">

      <div className="meeting-header">
        <span>Meeting in progress</span>
        <span className="timer">⏱ {formatTime()}</span>
      </div>

      <div className="video-grid">

        <div className="video-tile active">
          {videoOn ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="video-feed"
            />
          ) : (
            <div className="avatar">Camera OFF</div>
          )}
        </div>

        <div className="video-tile">
          <div className="avatar muted">Waiting</div>
          <p>Participant</p>
        </div>

      </div>

      <div className="meeting-controls">

        <button
          className={micOn ? 'control-btn active' : 'control-btn'}
          onClick={() => setMicOn(!micOn)}
        >
          <i className={`bx ${micOn ? 'bx-microphone' : 'bx-microphone-off'}`}></i>
        </button>

        <button
          className={videoOn ? 'control-btn active' : 'control-btn'}
          onClick={() => setVideoOn(!videoOn)}
        >
          <i className={`bx ${videoOn ? 'bx-video' : 'bx-video-off'}`}></i>
        </button>

        <button
          className="control-btn end"
          onClick={() => {
            stopCamera()
            navigate('/end')
          }}
        >
          <i className="bx bx-phone-off"></i>
        </button>

      </div>
    </div>
  )
}

export default Meeting
