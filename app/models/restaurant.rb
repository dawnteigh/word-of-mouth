class Restaurant < ApplicationRecord
  has_many :reviews
  has_many :meals through: :reviews
end
