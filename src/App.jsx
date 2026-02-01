
import './App.css'
import Home from './Pages/Home/home.jsx'
import Signin from './Pages/SignIn/signin.jsx'
import { useState } from 'react'
import JoinMeeting from './Pages/JoinMeeting/joinmeeting.jsx'
import Meeting from './Pages/Meeting/meeting.jsx'
import MeetingEnd from './Pages/Meeting/meetingend.jsx'
import NewMeeting from './Pages/NewMeeting/newmeeting.jsx'
import Schedule from './Pages/Schedule/schedule.jsx'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
        <Routes>
          <Route element={<Home user={user} setUser={setUser} />} path='/'></Route>
          <Route element={<Signin />} path='/signin'></Route>
          <Route element={<JoinMeeting />} path='/join'></Route>
          <Route element={<Meeting />} path='/meeting'></Route>
          <Route element={<MeetingEnd />} path='/end'></Route>
          <Route element={<NewMeeting />} path='/newmeeting'></Route>
          <Route element={<Schedule />} path='/schedule'></Route>


        </Routes>
  
    </>
  )
}

export default App
