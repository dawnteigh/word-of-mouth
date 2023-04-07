class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :image, :rating, :price, :user_id, :restaurant, :meal

  def meal 
    Meal.find(object.meal_id)
  end

  def restaurant
    Restaurant.find(object.restaurant_id)
  end
end
