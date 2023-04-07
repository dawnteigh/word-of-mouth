import React from 'react'
import { useSelector } from 'react-redux'

const Restaurants = () => {

  const restaurants = useSelector(state => state.restaurants.entities)

  const renderRestaurants = restaurants.map(r => {
    return (
      <div key={r.id} >
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