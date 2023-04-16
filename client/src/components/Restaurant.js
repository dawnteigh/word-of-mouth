import React from 'react'

const Restaurant = ({ restaurant, reviews }) => {

  const renderReviews = reviews.map(r => {
    return (
      <div key={r.id} >
        <img src={r.image} alt={r.meal.name} className="thumbnail" />
        <p>{r.content}</p><i> - {r.author}</i><br/>
        <b>Price: </b> {r.price} <b>Rating: </b> {r.rating}/5
      </div>
    )
  })
  return (
    <div>
      <b>{restaurant.name}</b><br/>
      <i>{restaurant.address}</i><br/>
      Average rating: {reviews[0].avg_rating}<br/>
      {renderReviews}<br/>
    </div>
  )
}

export default Restaurant