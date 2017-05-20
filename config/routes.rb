Rails.application.routes.draw do
  get '/' => 'landing#index'

  get '*path', to: 'application#index'
  # get'/', to: 'application#index'
end
