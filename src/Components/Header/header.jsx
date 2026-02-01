import React, { useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import SignIn from '../../Pages/SignIn/signin.jsx'

function Header({ user, setUser }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className='header'>
        <div className="logo">
          <img src="logo7.png" alt="" />
        </div>
        <div className="navs">
          <ul type='none'>
            <li>Home</li>
            <li onClick={() => navigate('/join')}>Join Meeting</li>
            <li onClick={() => navigate('/newmeeting')}>New Meeting</li>
            <li onClick={() => navigate('/schedule')}>Schedule Meeting</li>
          </ul>
        </div>
        <div className="user">
          <i className='bx bxs-user-circle'></i>
          {user ? (
            <div className="user-text">
              <span>Welcome </span>
              <strong>{user.name}</strong>
            </div>
          ) : (

            <div className="sign-btn">
              <button onClick={() => setOpen(true)}>Sign In</button>
            </div>
          )}
        </div>
      </div>
      {open && (<SignIn setUser={setUser} onClose={() => setOpen(false)} />)}
    </>
  )
}

export default Header