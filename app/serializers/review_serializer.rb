class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :image, :rating, :price, :created_at, :user_id, :restaurant, :meal, :key, :author

  def meal 
    Meal.find(object.meal_id)
  end

  def restaurant
    Restaurant.find(object.restaurant_id)
  end

  def author
    object.user.username.capitalize
  end

end
