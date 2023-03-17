class Review < ApplicationRecord
  belongs_to :user
  belongs_to :meal
  belongs_to :restaurant
  validates_presence_of :content, :rating, :price
  validates :rating, numericality: { in: 1..5 }
end
