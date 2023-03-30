class Meal < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :restaurants, through: :reviews
  accepts_nested_attributes_for :reviews, reject_if: :all_blank
  validates :name, presence: true, uniqueness: true
end
