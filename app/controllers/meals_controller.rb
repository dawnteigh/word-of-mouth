class MealsController < ApplicationController

  def index
    render json: Meal.all, status: :ok
  end

  def create
    meal = Meal.create!(meal_params)
    render json: meal, status: :created
  end

  private

  def meal_params
    params.permit(
      :name,
      :tags,
      reviews_attributes: [:content, :image, :rating, :price, :meal_id, :restaurant_id]
      )
  end
end
