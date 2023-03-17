class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :image, :rating, :price, :user_id, :meal_id, :restaurant_id
end
