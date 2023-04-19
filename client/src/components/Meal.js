import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Dimmer, Loader } from 'semantic-ui-react'
import Restaurant from './Restaurant'

const Meal = () => {
  let { mealId } = useParams()
  const meal = useSelector(state => state.meals.entities.find(m => m.id === parseInt(mealId)))

  if (!meal) {
    return (
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>  
    )
  }

  const restaurantsWithAvg = meal.restaurants.map(r => {
    const review = meal.reviews.find(rev => rev.restaurant.id === r.id)
    return {
        ...r,
        avg_rating: review.avg_rating
    }  
  })

  const sortByRating = (a, b) => {
    let rA = a.avg_rating
    let rB = b.avg_rating
    if(rA < rB) return 1;
    if(rA > rB) return -1;
    return 0;
  }

  const sortedRestaurants = restaurantsWithAvg.sort(sortByRating)

  const renderRestaurants = sortedRestaurants.map(r => {
    return (
      <Restaurant key={r.id} restaurant={r} reviews={meal.reviews.filter(rev => rev.restaurant.id === r.id)} />
      )
    }
  )

  return (
    <div>
      <h1>{meal.name}</h1>
      <br/>
      {meal ? renderRestaurants : null}
    </div>
  )
}

export default Meal