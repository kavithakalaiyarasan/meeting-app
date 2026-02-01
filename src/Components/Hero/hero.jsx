import './hero.css'

import React from 'react'

function Hero() {
  return (
  <div className='card-sec'>
    <h1>Streamline communications in one place</h1>
    <p>Stay focused, work together, and achieve more with one platform for all your communication needs.</p>
    <div className="card-wrapper">

    <div className="cards">
        <img src="cardicon1.svg" alt="" />
        <h3>Meet</h3>
        <p>Host impactful meetings with features such as PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.</p>
    </div>
    <div className="cards">
        <img src="cardicon2.svg" alt="" />
        <h3>Call</h3>
        <p>Make and receive calls directly in Teams with features such as group calling, voicemail, and call transfers.
</p>
    </div>
    <div className="cards">
        <img src="cardicon3.svg" alt="" />
        <h3>Collaborate</h3>
        <p>Keep everyone in sync with the help of channels, shared task lists, and collaborative apps.</p>
    </div>
    <div className="cards">
        <img src="cardicon4.svg" alt="" />
        <h3>Chat</h3>
        <p>Quickly communicate with instant messaging and features such as emojis, AI-generated suggested replies, and priority notifications.</p>
    </div>
    </div>
  </div>
  )
}

export default Hero