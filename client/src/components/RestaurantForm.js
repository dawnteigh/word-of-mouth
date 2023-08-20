import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
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
    <div className="center">
      <Form onSubmit={handleSubmit} size="mini" >
        <Form.Field
          control='input'
          placeholder="Restaurant Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br/>
        <Form.Field
          control='input'
          placeholder="Street Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <br/>
        <Button type="submit" size="mini" className="colorful" >Submit</Button>
      </Form>
    </div>
  )
}


export default RestaurantForm