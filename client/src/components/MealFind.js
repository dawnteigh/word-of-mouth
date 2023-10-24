import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MealCard from './MealCard';

const MealFind = () => {

  const [filter, setFilter] = useState("")
  const meals = useSelector(state => state.meals.entities)

  const filteredMeals = meals.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()))

  const renderMeals = filteredMeals.map(m => <MealCard key={m.id} meal={m} />)

  return (
    <div className="wrapper">
      <div className="find">
        <b>Find the best: </b>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <br /><br />
      <div className='meal-grid'>
        {renderMeals}
      </div>
    </div>
  )
}

export default MealFind