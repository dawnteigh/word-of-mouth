import React from 'react'
import MealCard from './MealCard'
import { useSelector, useDispatch } from 'react-redux'
import { setMeal } from '../features/mealsSlice'

const Meals = () => {

  const meals = useSelector(state => state.meals.entities)
  const dispatch = useDispatch()

  const handleClick = (id) => dispatch(setMeal(id))

  const renderMeals = meals.map(m => {
    return (
      <div key={m.id} id={m.id} onClick={() =>handleClick(m.id)} >
        <MealCard meal={m} />
      </div>
    )
  })

  return (
    <div>
      <h3>Find your dish or create a review for a new one:</h3>
        {renderMeals}
    </div>
  )
}

export default Meals