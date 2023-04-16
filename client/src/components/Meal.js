import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Meal = () => {
  let { mealId } = useParams()
  const meal = useSelector(state => state.meals.entities.find(m => m.id === parseInt(mealId)))

  return (
    <div>{meal.name}</div>
  )
}

export default Meal