import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const user = useSelector(state => state.sessions.currentUser)

  return (
    <div>
      <h2>Hello, {user.username}!</h2>
      <br/>
    </div>
  )
}

export default Home