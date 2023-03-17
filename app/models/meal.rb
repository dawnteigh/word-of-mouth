class Meal < ApplicationRecord
  has_many :reviews
  has_many :restaurants, through: :reviews
  accepts_nested_attributes_for :reviews
  validates_presence_of :name
end
