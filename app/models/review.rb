class Review < ApplicationRecord
  belongs_to :user
  belongs_to :meal
  belongs_to :restaurant
end
