class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

  private

  def current_user
    User.find_by(id: session[:user_id])
  end

  def authorize
    if !current_user
      return render json: { error: ["Please log in or sign up to continue."] }, status: :unauthorized
    end
  end

  def invalid_response(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
