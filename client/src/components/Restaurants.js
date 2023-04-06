import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRestaurants } from '../reducers/restaurantsSlice'

const Restaurants = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [])

  return (
    <div>Restaurants</div>
  )
}

export default Restaurants