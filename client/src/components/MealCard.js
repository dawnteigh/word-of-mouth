import React from 'react'

const MealCard = ({ meal }) => {
  return (
    <div>
      <h3>{meal.name}</h3>
      <img 
        className="thumbnail"
        src={meal.reviews[Math.floor(Math.random() * meal.reviews.length)].image} 
        alt={meal.name}  
      />
    </div>
  )
}

export default MealCard