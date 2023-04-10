import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editReview } from '../features/sessionsSlice'
import { mealReviewUpdated } from '../features/mealsSlice'

const ReviewEdit = ({ review, setToggle, toggle }) => {

  const { id, content, image, rating, price } = review
  const [form, setForm] = useState({
    content: content,
    image: image,
    rating: rating,
    price: price
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editReview({ id, form }))
    dispatch(mealReviewUpdated({ 
      ...review,
      content: form.content,
      image: form.image,
      rating: parseInt(form.rating),
      price: parseInt(form.price)
    }))
    setToggle(!toggle)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
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

export default ReviewEdit