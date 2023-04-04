import React, { useState } from 'react'

const ReviewForm = () => {
  
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
      <form onSubmit={handleSubmit} >
        <input
          type="textarea"
          label="Content" 
          placeholder="Content"
          name="content"
          value={form.content}
          onChange={handleChange}
        />
        <input
          type="text"
          label="Image" 
          placeholder="Image"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
        <input
          type="number"
          label="Rating" 
          placeholder="Rating"
          name="rating"
          value={form.rating}
          onChange={handleChange}
        />
        <input
          type="number"
          label="Price" 
          placeholder="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ReviewForm