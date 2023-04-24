Rails.application.routes.draw do
  scope '/api' do
    resources :users, only: [:update]
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :meals, only: [:create, :index, :show] do
      resources :reviews, only: [:index, :create]
    end
    resources :restaurants, only: [:create, :index]
    
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
