class FallbackController < ActionController::Base
  skip_before_action :authorize
  def index
    # React app index page
    render file: 'public/index.html'
  end
end
