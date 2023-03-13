class Review < ApplicationRecord
  belongs_to :user
  belongs_to :meal
  belongs_to :restaurant
  accepts_nested_attributes_for :restaurant
  accepts_nested_attributes_for :meal
end
