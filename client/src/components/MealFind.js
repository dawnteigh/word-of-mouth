import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import MealCard from './MealCard';

const MealFind = () => {

  const [filter, setFilter] = useState("")
  const meals = useSelector(state => state.meals.entities)
  const navigate = useNavigate()

  const filteredMeals = meals.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()))

  const renderMeals = filteredMeals.map(m => {
    return (
      <div key={m.id} id={m.id} onClick={() => navigate(`/meals/${m.id}`)} >
        <MealCard meal={m} />
      </div>
    )
  })

  return (
    <div>
      <b>{"Find the best "}</b>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="meal"
      />
      <br/>
      {renderMeals}
    </div>
  )
}

export default MealFind