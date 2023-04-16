class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :image, :rating, :price, :user_id, :restaurant, :meal, :key, :avg_rating, :author

  def meal 
    Meal.find(object.meal_id)
  end

  def restaurant
    Restaurant.find(object.restaurant_id)
  end

  def author
    object.user.username.capitalize
  end

  def avg_rating
    reviews = Review.all.filter { |r| r.key === object.key }.map { |r| r.rating }
    reviews.sum / reviews.size
  end

end
