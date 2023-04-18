import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { signUpPost } from '../features/sessionsSlice'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [signup, setSignup] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value
    setSignup({
      ...signup,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signUpPost(signup))
    navigate("/")
  }

  return (
    <div className='center'>
      <h3>Sign up</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Field
          control="input"
          placeholder="Username"
          name="username"
          value={signup.username}
          onChange={handleChange}
        />
        <br/>
        <Form.Field
          control="input"
          type="password"
          placeholder="Password"
          name="password"
          value={signup.password}
          onChange={handleChange}
        />
        <br/>
         <Form.Field
          control="input"
          type="password"
          placeholder="Confirm Password"
          name="password_confirmation"
          value={signup.password_confirmation}
          onChange={handleChange}
        />
        <br/>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Signup