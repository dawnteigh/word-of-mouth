class ReviewsController < ApplicationController

  def create
    review = current_user.reviews.create!(review_params)
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:content, :image, :rating, :price, :meal_id, :restaurant_id)
  end
end
