import React, { useState } from 'react'
import { Item, Button, Header, Card, Image } from 'semantic-ui-react'

const Restaurant = ({ restaurant, reviews }) => {

  const [open, setOpen] = useState(false)
  const average = reviews.reduce((total, next) => total + next.rating, 0) / reviews.length
  const renderReviews = reviews.map(r => {
    return (
      <Card key={r.id} raised >
        <Image src={r.image} alt={r.meal.name} className="fittedReview" />
        <Card.Content>
          <Card.Meta>
            <b>Price: </b> {r.price} <b>Rating: </b> {r.rating}/5
          </Card.Meta>
          <Card.Description>
            {r.content}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          -- {r.author}
        </Card.Content>
      </Card>
    )
  })
  return (
    <Item>
      <Item.Content>
        <Header as="h1" floated="right">{Math.round(average * 10) / 10}/5</Header>
        <Item.Header>{restaurant.name}</Item.Header>
        <Item.Description>{restaurant.address}</Item.Description>
          <br/>
          {open ? 
          <div className="reviewGrid2">
            <Card.Group centered itemsPerRow={2}>{renderReviews}</Card.Group>
          </div> :
          null}
          <Button size="mini" onClick={() => setOpen(!open)} >
            { open ? "Hide Reviews" : "Show Reviews" }
          </Button>
      </Item.Content>
    </Item>
  )
}

export default Restaurant