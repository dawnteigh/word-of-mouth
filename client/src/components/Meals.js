import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMeal } from '../features/mealsSlice'

const Meals = () => {

  const meals = useSelector(state => state.meals.entities)
  const dispatch = useDispatch()

  const handleClick = (e) => dispatch(setMeal(e.target.id))

  const renderMeals = meals.map(m => {
  return (
    <li key={m.id}>
      <a id={m.id} onClick={handleClick} >{m.name}</a>
    </li>
  )
})

  return (
    <div>
      <h3>Find your dish or create a review for a new one:</h3>
      <ul>
        {renderMeals}
      </ul>
    </div>
  )
}

export default Meals