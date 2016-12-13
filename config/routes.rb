Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]

    resources :notes, only: [:index, :create, :show, :update, :destroy] do
      resources :tags, only: [:create]
      get '/tags/:tag_name', to: 'tags#destroy', as: 'tag'
    end

    resources :notebooks, only: [:index, :create, :show, :update, :destroy]
    resources :tags, only: [:index, :show]
  end
end
