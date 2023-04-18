import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { logInPost } from '../features/sessionsSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logInPost({ username, password }))
    navigate("/")
  }

  return (
    <div className='center'>
      <h3>Log in</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Field
          control='input'
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <Form.Field
          control='input'
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Login