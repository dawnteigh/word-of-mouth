import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logInPost } from '../features/sessionsSlice'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logInPost({ username, password }))
  }

  return (
    <div>
      Log in:
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          label="Username" 
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <input
          type="password"
          label="Password" 
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login