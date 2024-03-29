import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Dimmer, Loader, Item, Button, Icon, Segment } from 'semantic-ui-react'
import Restaurant from './Restaurant'

const Meal = () => {
  let { mealId } = useParams()
  const meal = useSelector(state => state.meals.entities.find(m => m.id === parseInt(mealId)))
  const navigate = useNavigate()

  if (!meal) {
    return (
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>  
    )
  }

  const mealImg = meal.reviews[0] ? meal.reviews[Math.floor(Math.random() * meal.reviews.length)].image : null
  const restaurantsWithAvg = meal.restaurants.map(r => {
    const reviews = meal.reviews.filter(rev => rev.restaurant.id === r.id)
    const average = reviews.reduce((total, next) => total + next.rating, 0) / reviews.length
    return {
        ...r,
        avg_rating: average
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
    <div className="mealShow">
      <Segment raised>
        <h1>{meal.name}</h1>
        <img src={mealImg} alt={meal.name} className="fitted" />
        <p>Here is a list of known restaurants that serve {meal.name}, sorted by highest average rating. Click '<b>Show Reviews</b>' to see what our users had to say!</p>
      </Segment>
      <br/>
      <Item.Group divided>
        {meal ? renderRestaurants : null}
      </Item.Group>
      <Button onClick={() => navigate('/meals')} size="mini" className="colorful" ><Icon name="backward" />Back</Button>
    </div>
  )
}

export default Meal