import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Restaurant from './Restaurant'

const Meal = () => {
  let { mealId } = useParams()
  const meal = useSelector(state => state.meals.entities.find(m => m.id === parseInt(mealId)))

  const renderRestaurants = meal.restaurants.map(r => {
    return (
      <Restaurant key={r.id} restaurant={r} reviews={meal.reviews.filter(rev => rev.restaurant.id === r.id)} />
      )
    }
  )

  return (
    <div>
      <h1>{meal.name}</h1>
      <br/>
      {renderRestaurants}
    </div>
  )
}

export default Meal