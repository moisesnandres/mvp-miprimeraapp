Rails.application.routes.draw do
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
        end
    end
    get '/' => 'landing#index'
    get '/perfil' => 'landing#my_profile'

    get '*path', to: 'application#index'
end
