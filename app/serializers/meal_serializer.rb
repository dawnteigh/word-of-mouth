class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :restaurants
  has_many :reviews

  def restaurants
    object.restaurants.uniq
  end
end
