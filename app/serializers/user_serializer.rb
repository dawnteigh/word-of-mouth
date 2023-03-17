class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
  has_many :meals
  has_many :restaurants

  def username
    object.username.capitalize
  end
  
end
