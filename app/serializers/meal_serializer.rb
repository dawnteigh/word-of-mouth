class MealSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :reviews
  has_many :restaurants
end
