import React from 'react'
import { Navigate, useNavigate} from 'react-router-dom';

function SignupMessage() {

    const n=useNavigate()
    const click =()=>{
     
n("/")

    }
  return (
    <div>
      <h1 style={{color:"white"}}>Thanks For Registering</h1>
      <button onClick={click}>LogOut</button>
    </div>
  )
}

export default SignupMessage
