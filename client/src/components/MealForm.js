import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMeal } from '../actions/meals'

const MealForm = () => {
  const [name, setName] = useState("")
  
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    //POST to /meals
  }

  return (
    <div>
      Add a meal:
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          label="Name" 
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default MealForm