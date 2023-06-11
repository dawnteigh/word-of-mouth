import React, { useState } from 'react'
import { Item, Button, Card, Image, Grid } from 'semantic-ui-react'

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
        <Grid columns={3}>
          <Grid.Row>
          <Grid.Column>
            <Item.Description>
              <span className='restaurant'>{restaurant.name}</span><br/>
              <i>{restaurant.address}</i>
            </Item.Description>
          </Grid.Column>
          <Grid.Column>
            <span className='average'>{Math.round(average * 10) / 10}</span><span className='outta5'>/5</span>
          </Grid.Column>
          <Grid.Column>
            <Button size="small" onClick={() => setOpen(!open)} >
              { open ? "Hide Reviews" : "Show Reviews" }
            </Button>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
          {
            open ? 
            <div className="reviewGrid2">
              <Card.Group centered itemsPerRow={2}>{renderReviews}</Card.Group>
            </div> :
            null
          }
      </Item.Content>
    </Item>
  )
}

export default Restaurant