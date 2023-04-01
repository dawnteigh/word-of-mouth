import React, { useState } from 'react'

const Signup = () => {


  const [signup, setSignup] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  })

  const handleChange = (e) => {
    const value = e.target.value
    setSignup({
      ...signup,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //fetch to /signup
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          label="Username" 
          placeholder="Username"
          name="username"
          value={signup.username}
          onChange={handleChange}
          />
        <input
          type="password"
          label="Password" 
          placeholder="Password"
          name="password"
          value={signup.password}
          onChange={handleChange}
        />
         <input
          type="password"
          label="Password" 
          placeholder="Confirm Password"
          name="password_confirmation"
          value={signup.password_confirmation}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup