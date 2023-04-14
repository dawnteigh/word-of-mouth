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
import { fetchUser, addUserReview } from '../features/sessionsSlice'
import { fetchMeals, resetReview } from '../features/mealsSlice'
import { fetchRestaurants } from '../features/restaurantsSlice'


function App() {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const review = useSelector(state => state.meals.newReview)

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchMeals())
      dispatch(fetchRestaurants())
    }
  }, [loggedIn])

  useEffect(() => {
    if (review) {
      dispatch(addUserReview(review))
      dispatch(resetReview())
    }
  }, [review])

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
