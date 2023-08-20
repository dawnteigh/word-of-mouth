import React, { useState } from 'react'
import { Input, Card } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { setRestaurant } from '../features/restaurantsSlice'

const Restaurants = () => {

  const restaurants = useSelector(state => state.restaurants.entities)
  const dispatch = useDispatch()
  const [filter, setFilter] = useState("")

  const filteredRestaurants = restaurants.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()))

  const handleClick = (id) => {
    dispatch(setRestaurant(id))
  }

  const renderRestaurants = filteredRestaurants.map(r => {
    return (
    <Card onClick={() => handleClick(r.id)} key={r.id} raised style={{ margin: "5px"}} >
      <Card.Content>
        <Card.Header>{r.name}</Card.Header>
        <Card.Meta>{r.address}</Card.Meta>
      </Card.Content>
    </Card>
    )
  })
  return (
    <div>
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search restaurants"
        size="mini"
      />
      <br/><br/>
      <div className="reviewGrid" >
      <br/>
        <Card.Group itemsPerRow={2} centered >
          {renderRestaurants}
        </Card.Group>
      </div>
    </div>
  )
}

export default Restaurants