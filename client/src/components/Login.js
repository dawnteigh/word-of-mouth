import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../reducers/sessionsSlice'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username.toLowerCase(),
        password: password
      })
    })
    .then(r => r.json())
    .then(user => dispatch(logIn(user)))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          label="Username" 
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <input
          type="password"
          label="Password" 
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login