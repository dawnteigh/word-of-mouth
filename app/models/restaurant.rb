class Restaurant < ApplicationRecord
  has_many :reviews
  has_many :meals, through: :reviews
  validates_presence_of :name, :address
end
