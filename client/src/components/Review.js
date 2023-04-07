import React from 'react'

const Review = ({ r }) => {
  return (
    <div key={ r.id } >
        <img className="thumbnail" src={r.image} /><br/>
        <b>{r.meal.name}</b><br/>
        <i>{r.restaurant.name}</i><br/>
        <p>{r.content}</p>
        <b>Price:</b> {r.price} | <b>Rating:</b> {r.rating}/5
        <br/><br/>
      </div>
  )
}

export default Review