import React from 'react'
import RegistrationForm from './RegistrationForm'
import SignupMessage from './SignupMessage'
import {Routes, Route, Link} from  "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
<Route exact path="/" element={<RegistrationForm/>} ></Route>
<Route exact path="/signup" element={<SignupMessage/>} ></Route>
      </Routes>
      
      
    </div>
  )
}
