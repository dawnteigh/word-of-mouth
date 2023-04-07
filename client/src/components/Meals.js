import React from 'react'
import { useSelector } from 'react-redux'

const Meals = () => {

  const meals = useSelector(state => state.meals.entities)

  // const renderMeals = meals.map(m => {

  // })
  return (
    <div>Meals</div>
  )
}

export default Meals