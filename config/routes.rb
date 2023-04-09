Rails.application.routes.draw do
  get 'animals/new'
  get 'animals/create'
  get 'animals/index'
  get 'animals/update'
  get 'animals/destroy'
  get 'static_pages/top'
  root :to => 'static_pages#top'
  resources :users
  resources :animals do
    resources :comments
  end


  get 'login' => 'user_sessions#new', :as => :login
  post 'login' => "user_sessions#create"
  post 'logout' => 'user_sessions#destroy', :as => :logout
end
