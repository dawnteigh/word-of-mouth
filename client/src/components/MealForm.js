import React, { useState } from 'react'

const MealForm = () => {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    //POST to /meals
  }

  return (
    <div>
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