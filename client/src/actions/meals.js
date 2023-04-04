export const addMeal = (name, review, currentUser, restaurantId) => {
  const payload = {
    ...name,
    reviews: [
      {
        content: review.content,
        image: review.image,
        rating: review.rating,
        price: review.price,
        user_id: currentUser.id,
        restaurant_id: restaurantId
      }
    ]
  }

  return {
    type: "ADD_MEAL",
    payload
  }
}