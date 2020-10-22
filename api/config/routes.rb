Rails.application.routes.draw do
  get 'ping', to: 'ping#index'
  resources 'colors', only: [:index]
end
