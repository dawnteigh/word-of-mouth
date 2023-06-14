class Review < ApplicationRecord
  belongs_to :user
  belongs_to :meal
  belongs_to :restaurant
  validates_presence_of :content, :rating, :price
  validates :rating, numericality: { in: 1..5 }

  before_destroy do
    @meal = self.meal
    # @restaurant = self.restaurant
  end

  after_destroy do
    unless @meal.reviews.any?
        @meal.destroy
    end
    # unless @restaurant.reviews.any?
    #   @restaurant.destroy
    # end
  end

  # extra meal-restaurant link if needed
  def key
    "#{meal_id}" + "#" + "#{restaurant_id}"
  end

end
