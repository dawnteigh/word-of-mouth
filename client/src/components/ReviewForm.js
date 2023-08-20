import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { addMealWithReview, addReviewToMeal } from '../features/mealsSlice'

const ReviewForm = () => {
  const meal = useSelector(state => state.meals.selectedMeal)
  const restaurant = useSelector(state => state.restaurants.selectedRestaurant)
  const userId = useSelector(state => state.sessions.currentUser.id)
  const [name, setName] = useState("")
  const [form, setForm] = useState({
    content: "",
    image: "",
    rating: "",
    price: ""
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value
    })
  }

  const mealObj = {
      name: name,
      reviews_attributes: [{
        user_id: userId,
        restaurant_id: restaurant,
        content: form.content,
        image: form.image,
        rating: form.rating,
        price: form.price
    }]
  }

  const reviewObj = {
      restaurant_id: restaurant,
      meal_id: meal,
      content: form.content,
      image: form.image,
      rating: form.rating,
      price: form.price
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (meal) {
      dispatch(addReviewToMeal(reviewObj))
    }
    else {
      dispatch(addMealWithReview(mealObj))
    }
  }

  return (
    <div className={ meal ? "large-margins" : "wrapper" } >
      <Form onSubmit={handleSubmit} size="mini">
        {meal ? 
        null :
        <Form.Field
        control='input' 
        placeholder="Name of your dish"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        /> }
        <br/>
        {meal ?
        <>
          <h3>Write your review:</h3>
          <i>Remember to keep it about the food!</i>
        </> :
        null}
        <Form.Field
          control="textarea" 
          placeholder="Content"
          name="content"
          value={form.content}
          onChange={handleChange}
        />
        <br/>
        <Form.Field
          control='input' 
          placeholder="Image"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
        <br/>
        <Form.Field
          control='input'
          type="number" 
          placeholder="Rating"
          name="rating"
          value={form.rating}
          onChange={handleChange}
        />
        <br/>
        <Form.Field
          control='input'
          type="number" 
          placeholder="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <br/>
        <Button type="submit" size="mini" className="colorful" >Submit</Button>
      </Form>
    </div>
  )
}

export default ReviewForm