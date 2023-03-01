Rails.application.routes.draw do
  #resources :players

  root 'pages#index'

  get '/game/:id', to: 'pages#game'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  #get "path", to: "view" ex: get about, to: "pages#about"
  # Defines the root path route ("/")
  # root "articles#index"
end
