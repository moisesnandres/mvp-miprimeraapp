Rails.application.routes.draw do
    get '/' => 'landing#index'
    get '/profile' => 'landing#my_profile'
    get '/login' => 'landing#login'

    namespace :api, defaults: { format: :json } do
        namespace :v1 do
            namespace :login do
                post 'create'
                delete 'destroy'
            end
            namespace :users do
                post 'create'
            end
            namespace :companies do
                post 'create'
            end
            namespace :projects do
                post 'create'
                post 'delete'
                post 'update'
                get 'index'
            end
            namespace :assignments do
                post 'create'
                post 'left'
                post 'aprobe'
            end
        end
    end

    get '*path', to: 'application#index'
end
