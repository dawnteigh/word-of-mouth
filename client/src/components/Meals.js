import React from 'react'
import { useSelector } from 'react-redux'

const Meals = () => {

  const meals = useSelector(state => state.meals.entities)

  const renderMeals = meals.map(m => <li key={m.id} ><a>{m.name}</a></li>)

  return (
    <div>
      <ul>
        {renderMeals}
      </ul>
    </div>
  )
}

export default Meals