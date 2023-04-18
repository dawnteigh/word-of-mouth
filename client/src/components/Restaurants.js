import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { setRestaurant } from '../features/restaurantsSlice'

const Restaurants = () => {

  const restaurants = useSelector(state => state.restaurants.entities)
  const dispatch = useDispatch()
  const [filter, setFilter] = useState("")

  const filteredRestaurants = restaurants.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()))

  const handleClick = (e) => {
    dispatch(setRestaurant(e.target.id))
  }

  const renderRestaurants = filteredRestaurants.map(r => {
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
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search restaurants"
      />
      <br/><br/>
      {renderRestaurants}
    </div>
  )
}

export default Restaurants