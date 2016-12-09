Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:index, :create, :show, :update, :destroy]
    resources :notebooks, only: [:index, :create, :show, :destroy] do
      resources :notes, only: [:index]
    end
  end
end
