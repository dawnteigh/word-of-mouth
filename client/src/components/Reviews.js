import React from 'react'
import Review from './Review'
import { useSelector } from 'react-redux'

const Reviews = () => {

  const reviews = useSelector(state => state.sessions.currentUser.reviews)

  const renderReviews = reviews.map(r => <Review r={r} />)

  return (
    <div>
      { renderReviews }
    </div>
  )
}

export default Reviews