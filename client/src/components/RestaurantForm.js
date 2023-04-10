import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRestaurant } from '../features/restaurantsSlice'

const RestaurantForm = () => {

  const dispatch = useDispatch()

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
    dispatch(addRestaurant(form))
    setForm({
      name: "",
      address: ""
    })
  }

  return (
    <div>
      Add a restaurant:
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          label="Name" 
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          label="Address" 
          placeholder="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}


export default RestaurantForm