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
import { fetchUser } from '../features/sessionsSlice'
import { fetchMeals } from '../features/mealsSlice'
import { fetchRestaurants } from '../features/restaurantsSlice'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  const loggedIn = useSelector(state => state.sessions.loggedIn)

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchMeals())
      dispatch(fetchRestaurants())
    }
  }, [loggedIn])

  if (!loggedIn) {
    return (
      <div className="App">
        <Login />
        <Signup />
      </div>
    )
  }
  return (
    <div className="App">
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
