import '../css/App.css';
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import ReviewNew from './ReviewNew'
import UserProfile from './UserProfile'
import Meals from './Meals';
import Meal from './Meal'
import Restaurants from './Restaurants'
import Restaurant from './Restaurant'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../reducers/sessionsSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  const loggedIn = useSelector(state => state.sessions.loggedIn)
  if (!loggedIn) {
    return (
      <div className="App">
        {/* render if no user */}
        <Login />
        <Signup />
      </div>
    )
  }
  return (
    <div className="App">
      {/* render if user */}
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/review" element={ <ReviewNew /> } />
        <Route path="/:username" element={ <UserProfile /> } />
        <Route path="/meals" element={ <Meals /> } />
        <Route path="/meals/:mealId" element={ <Meal /> } />
        <Route path="/restaurants" element={ <Restaurants /> } />
        <Route path="/restaurants/:restaurantId" element={ <Restaurant /> } />
      </Routes>
    </div>
  );
}

export default App;
