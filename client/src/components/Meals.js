import React, { useState } from 'react'
import { Card, Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import MealCard from './MealCard'

const Meals = () => {

  const meals = useSelector(state => state.meals.entities)
  const [filter, setFilter] = useState("")

  const filteredMeals = meals.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()))

  const renderMeals = filteredMeals.map(m => <MealCard key={m.id} meal={m} /> )

  return (
    <div>
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search meals"
      />
      <br/><br/>
      <div className="reviewGrid">
      <br/>
        <Card.Group itemsPerRow="two" centered >
          {renderMeals}
        </Card.Group>
      </div>
    </div>
  )
}

export default Meals