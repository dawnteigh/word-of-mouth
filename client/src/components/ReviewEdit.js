import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editReview, resetEdit } from '../features/sessionsSlice'
import { mealReviewUpdated } from '../features/mealsSlice'
import { Form, Button } from 'semantic-ui-react'

const ReviewEdit = ({ review, setToggle, toggle }) => {

  const { id, content, image, rating, price } = review
  const [form, setForm] = useState({
    content: content,
    image: image,
    rating: rating,
    price: price
  })
  const success = useSelector(state => state.sessions.edit)

  useEffect(() => {
    if (success) {
      dispatch(mealReviewUpdated({ 
        ...review,
        content: form.content,
        image: form.image,
        rating: parseInt(form.rating),
        price: parseInt(form.price)
      }))
      dispatch(resetEdit())
      setToggle(!toggle)
    }
  }, [success])

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
  }

  return (
    <div>
      <Form size="mini" onSubmit={handleSubmit} >
      <Form.Field
          control="textarea" 
          placeholder="Content"
          label="Content"
          name="content"
          value={form.content}
          onChange={handleChange}
        />
        <br/>
        <Form.Field
          control='input' 
          placeholder="Image"
          label="Image URL"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
        <br/>
        <Form.Field
          control='input'
          type="number" 
          placeholder="Rating"
          label="Rating out of 5"
          name="rating"
          value={form.rating}
          onChange={handleChange}
        />
        <br/>
        <Form.Field
          control='input'
          type="number" 
          placeholder="Price"
          label="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default ReviewEdit