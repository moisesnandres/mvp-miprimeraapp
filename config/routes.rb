Rails.application.routes.draw do
    namespace :api do 
        namespace :v1 do
            namespace :login do
                post 'create'
                delete 'destroy'
            end
            namespace :users do
                post 'create'
            end
        end
    end
    get '/' => 'landing#index'

    get '*path', to: 'application#index'
end
