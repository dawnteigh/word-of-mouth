import React, { useState } from 'react'
import ReviewEdit from './ReviewEdit'

const Review = ({ r }) => {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <img className="thumbnail" src={r.image} /><br/>
      <b>{r.meal.name}</b><br/>
      <i>{r.restaurant.name}</i><br/>
      <p>{r.content}</p>
      <b>Price:</b> {r.price} | <b>Rating:</b> {r.rating}/5
      <br/><br/>
      <button onClick={() => setToggle(!toggle)}>Edit</button>
      <button>Delete</button>
      {toggle ? <ReviewEdit review={r} setToggle={setToggle} toggle={toggle} /> : null}
    </div>
  )
}

export default Review