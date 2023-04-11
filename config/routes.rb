Rails.application.routes.draw do
  root :to => 'static_pages#top'
  resources :users
  resources :animals do
    get 'dog', on: :collection
  end

  get 'login' => 'user_sessions#new', :as => :login
  post 'login' => "user_sessions#create"
  post 'logout' => 'user_sessions#destroy', :as => :logout
end
