class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :tags
  has_many :reviews

  # def tags
  #   take the stringified tags and separate them into an array
  # end
end
