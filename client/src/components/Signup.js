import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../features/sessionsSlice'

const Signup = () => {

  const [signup, setSignup] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    setSignup({
      ...signup,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/signup', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: signup.username,
        password: signup.password,
        password_confirmation: signup.password_confirmation
      })
    })
    .then(r => r.json())
    .then((user) => dispatch(logIn(user)))
  }

  return (
    <div>
      Sign up:
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          label="Username" 
          placeholder="Username"
          name="username"
          value={signup.username}
          onChange={handleChange}
        />
        <br/>
        <input
          type="password"
          label="Password" 
          placeholder="Password"
          name="password"
          value={signup.password}
          onChange={handleChange}
        />
        <br/>
         <input
          type="password"
          label="Password" 
          placeholder="Confirm Password"
          name="password_confirmation"
          value={signup.password_confirmation}
          onChange={handleChange}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup