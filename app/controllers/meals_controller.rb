class MealsController < ApplicationController

  def index
    render json: Meal.all, status: :ok
  end

  def create
    meal = Meal.create!(meal_params)
    render json: meal, status: :created
  end

  def show
    meal = Meal.find_by(id: params[:id])
    render json: meal, status: :ok
  end

  private

  def meal_params
    params.permit(
      :name,
      reviews_attributes: [:content, :image, :rating, :price, :user_id, :meal_id, :restaurant_id]
      )
  end
end
