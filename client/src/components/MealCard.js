import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMeal } from '../features/mealsSlice'

const MealCard = ({ meal }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = (id) => {
    if (location.pathname === "/meals") {
      navigate(`/meals/${id}`)
    }
    else
      dispatch(setMeal(id))
  }

  return (
      <Card onClick={() => handleClick(meal.id)} style={{width: "200px", margin: "5px"}} raised >
        <Card.Content>
          <Card.Header>{meal.name}</Card.Header>
        </Card.Content>
          <Image 
            src={meal.reviews[Math.floor(Math.random() * meal.reviews.length)].image} 
            alt={meal.name} className="fitted"
          />
      </Card>
  )
}

export default MealCard