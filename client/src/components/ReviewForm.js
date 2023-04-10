import React, { useState } from 'react'
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
    rating: 0,
    price: 0
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
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      reviews_attributes: [{
        user_id: userId,
        restaurant_id: restaurant,
        content: form.content,
        image: form.image,
        rating: form.rating,
        price: form.price
    }]
    })
  }

  const reviewObj = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      restaurant_id: restaurant,
      meal_id: meal,
      content: form.content,
      image: form.image,
      rating: form.rating,
      price: form.price
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (meal) {
      dispatch(addReviewToMeal(reviewObj))
    }
    else
    dispatch(addMealWithReview(mealObj))
  }

  return (
    <div>
      Add a review:
      <form onSubmit={handleSubmit} >
        {meal ? 
        null :
        <input
        type="text"
        label="Name" 
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        /> }
        <br/>
        <input
          type="text-area"
          label="Content" 
          placeholder="Content"
          name="content"
          value={form.content}
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          label="Image" 
          placeholder="Image"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
        <br/>
        <input
          type="number"
          label="Rating" 
          placeholder="Rating"
          name="rating"
          value={form.rating}
          onChange={handleChange}
        />
        <br/>
        <input
          type="number"
          label="Price" 
          placeholder="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default ReviewForm