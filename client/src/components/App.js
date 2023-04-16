import '../css/App.css';
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import ReviewNew from './ReviewNew'
import MealFind from './MealFind';
import Meal from './Meal'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser, addUserReview } from '../features/sessionsSlice'
import { fetchMeals, resetReview } from '../features/mealsSlice'
import { fetchRestaurants } from '../features/restaurantsSlice'


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const review = useSelector(state => state.meals.newReview)
  const loading = useSelector(state => state.sessions.status === "loading" ? true : false)
  
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

  return (
    <div className="App">
      <NavBar />
      {
      loading ?
      <h1>Loading...</h1> :
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/review" element={ <ReviewNew /> } />
        <Route path="/meals" element={ <MealFind /> } />
        <Route path="/meals/:mealId" element={ <Meal /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
      </Routes>
      }
    </div>
  );
}

export default App;
