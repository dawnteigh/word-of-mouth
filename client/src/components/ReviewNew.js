import React from 'react'
import { Divider, Grid, Button, Segment, Icon } from 'semantic-ui-react'
import Restaurants from './Restaurants'
import RestaurantForm from './RestaurantForm'
import Meals from './Meals'
import ReviewForm from './ReviewForm'
import { useSelector, useDispatch } from 'react-redux'
import { setMeal } from '../features/mealsSlice'
import { setRestaurant } from '../features/restaurantsSlice'

const ReviewNew = () => {
  const restaurant = useSelector(state => state.restaurants.selectedRestaurant)
  const meal = useSelector(state => state.meals.selectedMeal)
  const dispatch = useDispatch()

  const goBack = () => (meal) ? dispatch(setMeal(null)) : dispatch(setRestaurant(null))

  if (!restaurant) {
    return (
      <div>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
            <h3>Where are you dining today?</h3>
            <Restaurants />
            </Grid.Column>
            <Grid.Column>
            <h3>Can't find your restaurant? Add it here:</h3>
            <RestaurantForm />
            </Grid.Column>
          </Grid>
          <Divider vertical>OR</Divider>
        </Segment>
      </div>
    )
  }

  if (!meal) {
    return (
      <div>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
            <h3>What are you eating?</h3>
            <Meals />
            </Grid.Column>
            <Grid.Column>
            <h3>Create a review with a new dish:</h3>
            <i>Remember to keep it about the food!</i>
            <ReviewForm />
            </Grid.Column>
          </Grid>
          <Divider vertical>OR</Divider>
        </Segment>
        <Button onClick={goBack}><Icon name="backward" />Back</Button>
      </div>
    )
  }

  return (
    <div>
      <ReviewForm />
      <br/>
      <Button onClick={goBack}><Icon name="backward" />Back</Button>
    </div>
  )
}

export default ReviewNew