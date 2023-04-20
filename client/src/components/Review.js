import React, { useState } from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import ReviewEdit from './ReviewEdit'
import { deleteReview } from '../features/sessionsSlice'
import { mealReviewDeleted } from '../features/mealsSlice'

const Review = ({ r }) => {

  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const handleDelete = () => { 
    dispatch(deleteReview(r.id))
    dispatch(mealReviewDeleted(r))
  }

  return (
      <Card>
        <Image className="fittedReview" src={r.image} alt={r.meal.name} />
        <Card.Content>
          <Card.Header>{r.meal.name}</Card.Header>
          <Card.Meta>
          <b>{r.restaurant.name}</b> - <i>{r.restaurant.address}</i>
          </Card.Meta>
          <Card.Description>
            {r.content}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <b>Price:</b> {r.price} | <b>Rating:</b> {r.rating}/5<br/>
        <Button onClick={() => setToggle(!toggle)}><Icon name={ toggle ? "backward" : "edit" }/>{ toggle ? "Nevermind" : "Edit" }</Button>
        <Button onClick={handleDelete}><Icon name="x" />Delete</Button>
        {toggle ? <ReviewEdit review={r} setToggle={setToggle} toggle={toggle} /> : null}
        </Card.Content>
      </Card>
  )
}

export default Review