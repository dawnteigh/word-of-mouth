class Meal < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :restaurants, through: :reviews
  accepts_nested_attributes_for :reviews
  validates :name, presence: true, uniqueness: true
end
