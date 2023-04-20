import React from 'react'
import Review from './Review'
import { Card } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const Reviews = () => {

  const reviews = useSelector(state => state.sessions.currentUser.reviews)

  const renderReviews = reviews.map(r => <Review key={r.id} r={r} />)

  return (
    <div className='center'>
      <Card.Group centered itemsPerRow={3}>
        { renderReviews }
      </Card.Group>
    </div>
  )
}

export default Reviews