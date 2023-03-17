class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all, status: :ok
  end

  def create
    restaurant = Restaurant.create!(restaurant_params)
    render json: restaurant, status: :created
  end

  private

  def restaurant_params
    params.permit(:name, :address)
  end
    
end
