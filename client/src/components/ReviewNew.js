import React from 'react'
import Restaurants from './Restaurants'
import RestaurantForm from './RestaurantForm'
import Meals from './Meals'
import ReviewForm from './ReviewForm'
import { useSelector } from 'react-redux'

const ReviewNew = () => {
  const restaurant = useSelector(state => state.restaurants.selectedRestaurant)
  const meal = useSelector(state => state.meals.selectedMeal)

  if (!restaurant) {
    return (
      <div>
        <h3>Where are you dining today?</h3>
        <Restaurants />
        <RestaurantForm />
      </div>
    )
  }

  return (
    <div>
      {meal ? null : <Meals />}
      <ReviewForm />
    </div>
  )
}

export default ReviewNew