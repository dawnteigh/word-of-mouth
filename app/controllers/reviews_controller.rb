class ReviewsController < ApplicationController
  
    def index
      if params[:meal_id]
        meal = Meal.find_by(id: params[:meal_id])
        reviews = meal.reviews
      else
        reviews = Review.all
      end
      render json: reviews, include: :meal
    end

  def create
    review = current_user.reviews.create!(review_params)
    render json: review, status: :created
  end

  def update
    review = current_user.reviews.find_by(id: params[:id])
    review.update!(review_params)
    render json: review, status: :ok
  end

  def destroy
    review = current_user.reviews.find_by(id: params[:id])
    review.destroy
    head :no_content
  end
  
  private

  def review_params
    params.permit(:content, :image, :rating, :price, :meal_id, :restaurant_id)
  end
end
