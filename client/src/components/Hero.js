import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Hero = () => {

  const [display, setDisplay] = useState("none")


  return (
    <div className='hero-wrapper'>
      <div id="login" >
        <button className="neon login" onClick={() => setDisplay("login")}>Log In</button>
        <button className="neon signup" onClick={() => setDisplay("signup")}>Sign Up</button>
        {display === "login" && <Login />}
        {display === "signup" && <Signup />}
      </div>
    </div>
  )
}

export default Hero