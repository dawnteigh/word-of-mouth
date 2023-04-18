import React from 'react'
import { Item } from 'semantic-ui-react'
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
      <Item onClick={() => handleClick(meal.id)}>
        <Item.Image src={meal.reviews[Math.floor(Math.random() * meal.reviews.length)].image} 
        alt={meal.name} size='tiny' />
        <Item.Content verticalAlign='middle' as="a" >{meal.name}</Item.Content>
      </Item>
  )
}

export default MealCard