import React from 'react'
import { useSelector } from 'react-redux'
import WordOfMouth from '../assets/wom-icon.png'

const Home = () => {

  const user = useSelector(state => state.sessions.currentUser)

  return (
    <div id="home" text>
      <br />
      <img src={WordOfMouth} alt="Word of Mouth" className="logo" />
      <h1>Hello, {user.username}!</h1>
      <p>Welcome to <b>Word of Mouth</b>, an app designed to help you find the best grub around! No longer will you have to comb through reviews about 'bad service' or delivery orders gone awry; it's all about the food here. Forget those 5 star restaurant reviews; their atmosphere might be exquisite, but their Duck à l'Orange isn't half as good as the place with 3 stars. You just want a good meal, and <b>Word of Mouth</b> sets the record straight.</p>
      <p>Clicking on <b>My Reviews</b> will let you see what you've already eaten and where, as well as let you manage your collection of critiques.</p>
      <p>If you're hungry, click on <b>Find a Meal</b> above to discover the best versions of what you're craving.</p> <p>Trying something new? Click on <b>Create Review</b> to give the community your thoughts on a particular dish.</p>
    </div>
  )
}

export default Home