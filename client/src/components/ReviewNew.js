import React from 'react'
import Restaurants from './Restaurants'
import MealForm from './MealForm'
import RestaurantForm from './RestaurantForm'
import ReviewForm from './ReviewForm'
import { useSelector } from 'react-redux'

const ReviewNew = () => {
  const selectedRestaurant = useSelector(state => state.restaurants.selectedRestaurant)

  if (!selectedRestaurant) {
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
      <MealForm />
      <ReviewForm />
    </div>
  )
}

export default ReviewNew