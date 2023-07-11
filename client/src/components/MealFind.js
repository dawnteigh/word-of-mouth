import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Input } from 'semantic-ui-react'
import MealCard from './MealCard';

const MealFind = () => {

  const [filter, setFilter] = useState("")
  const meals = useSelector(state => state.meals.entities)

  const filteredMeals = meals.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()))

  const renderMeals = filteredMeals.map(m => <MealCard key={m.id} meal={m} />)

  return (
    <div>
      <b>{"Find the best "}</b>
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="meal"
        size="mini"
      />
      <br/><br/>
      <div className='foodGrid'>
        <Card.Group itemsPerRow={4} centered >
          {renderMeals}
        </Card.Group>
      </div>
    </div>
  )
}

export default MealFind