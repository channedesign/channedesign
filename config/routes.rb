Rails.application.routes.draw do

  
  get "contacts/new", to: "main#index"
  resources "contacts", only: [:new, :create]
  get "admins/portfolios"
  get "admins/sign_up", to: "admins#index"
  get "admins", to: "admins#index"
  devise_for :admins
  resources :logos
  resources :portfolios
  root "main#index"



end
