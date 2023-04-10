import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ReviewForm = () => {
  const meal = useSelector(state => state.meals.selectedMeal)
  const [name, setName] = useState("")
  const [form, setForm] = useState({
    content: "",
    image: "",
    rating: 0,
    price: 0
  })

  const handleChange = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //POST to /reviews
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
          type="textarea"
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