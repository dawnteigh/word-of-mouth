import React, { useState } from 'react'

const RestaurantForm = () => {

  const [form, setForm] = useState({
    name: "",
    address: ""
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
    //POST to /restaurants
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          label="Name" 
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          />
        <input
          type="text"
          label="Address" 
          placeholder="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  )
}


export default RestaurantForm