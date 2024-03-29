class Restaurant < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :meals, through: :reviews
  validates_presence_of :name, :address
  validates :address, uniqueness: true
end
