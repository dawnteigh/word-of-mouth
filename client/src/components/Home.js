import React from 'react'
import Reviews from './Reviews'
import { useSelector } from 'react-redux'

const Home = () => {

  const user = useSelector(state => state.sessions.currentUser)
  const loggedIn = useSelector(state => state.sessions.loggedIn)

  if (!loggedIn) {
    return (
      <div>
        <h1>Welcome to Word of Mouth!</h1>
        Log in or sign up to get started!
      </div>
    )
  }

  return (
    <div>
      <h2>Hello, {user.username}!</h2>
      <br/>
      <Reviews />
    </div>
  )
}

export default Home