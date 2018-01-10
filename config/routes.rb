Rails.application.routes.draw do

  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :edit, :update, :show] do
      resources :reviews, only: [:index]
      resources :requests, only: [:index]
    end
    resources :reviews, only: [:destroy, :show, :update, :create]
    resources :requests, only: [:show, :create]
    resources :stars, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
