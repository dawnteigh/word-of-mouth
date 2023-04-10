import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setRestaurant } from '../features/restaurantsSlice'

const Restaurants = () => {

  const restaurants = useSelector(state => state.restaurants.entities)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(setRestaurant(e.target.id))
  }

  const renderRestaurants = restaurants.map(r => {
    return (
      <div 
        key={r.id}
        id={r.id}
        onClick={handleClick}
      >
        <b>{r.name}</b><br/>
        {r.address}<br/><br/>
      </div>
    )
  })
  return (
    <div>
      {renderRestaurants}
    </div>
  )
}

export default Restaurants