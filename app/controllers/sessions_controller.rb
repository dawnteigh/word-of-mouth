class SessionsController < ApplicationController

  def destroy
    session.clear
  end
  
end
