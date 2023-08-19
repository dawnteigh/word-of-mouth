import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMeal } from '../features/mealsSlice'

const MealCard = ({ meal }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = (id) => {
    if (location.pathname === "/meals") {
      navigate(`/meals/${id}`)
    }
    else
      dispatch(setMeal(id))
  }

  const mealImg = meal.reviews[0] ? meal.reviews[Math.floor(Math.random() * meal.reviews.length)].image : null

  return (
      <div className="meal-card" onClick={() => handleClick(meal.id)}>
          <h2>{meal.name}</h2>
          <img src={mealImg} alt={meal.name} className="fitted"/>
      </div>
  )
}

export default MealCard