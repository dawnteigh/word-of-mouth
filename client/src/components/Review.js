import React, { useState } from 'react'
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
    <div>
      <img className="thumbnail" src={r.image} /><br/>
      <b>{r.meal.name}</b><br/>
      <i>{r.restaurant.name}</i><br/>
      <p>{r.content}</p>
      <b>Price:</b> {r.price} | <b>Rating:</b> {r.rating}/5
      <br/><br/>
      <button onClick={() => setToggle(!toggle)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {toggle ? <ReviewEdit review={r} setToggle={setToggle} toggle={toggle} /> : null}
    </div>
  )
}

export default Review