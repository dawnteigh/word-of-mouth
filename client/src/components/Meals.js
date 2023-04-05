import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMeals } from '../reducers/mealsSlice.js'

const Meals = () => {
  const dispatch = useDispatch()
  const meals = useSelector(state => state.meals.entities)
  useEffect(() => {
    dispatch(fetchMeals())
  }, [])
  // const renderMeals = meals.map(m => {

  // })
  return (
    <div>Meals</div>
  )
}

export default Meals