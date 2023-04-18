import React, { useState } from 'react'
import { Item } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import MealCard from './MealCard'

const Meals = () => {

  const meals = useSelector(state => state.meals.entities)
  const [filter, setFilter] = useState("")

  const filteredMeals = meals.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()))

  const renderMeals = filteredMeals.map(m => <MealCard key={m.id} meal={m} /> )

  return (
    <div>
      <h3>Find your dish or create a review for a new one:</h3>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search meals"
      />
      <Item.Group divided >
        {renderMeals}
      </Item.Group>
    </div>
  )
}

export default Meals