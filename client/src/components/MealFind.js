import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Input } from 'semantic-ui-react'
import MealCard from './MealCard';

const MealFind = () => {

  const [filter, setFilter] = useState("")
  const meals = useSelector(state => state.meals.entities)

  const filteredMeals = meals.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()))

  const renderMeals = filteredMeals.map(m => <MealCard key={m.id} meal={m} />)

  return (
    <div className="wrapper">
      <b>Find the best </b>
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="meal"
        size="mini"
      />
      <br /><br />
      <div className='meal-grid'>
        {renderMeals}
      </div>
    </div>
  )
}

export default MealFind