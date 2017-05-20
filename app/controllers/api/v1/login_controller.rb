class Api::V1::LoginController < ApplicationController

    def create
        user = User.where(email: params[:email], password: params[:password])
        if user.exists?
            render json: {message: 'Login successfully!'}, status: 200
        else
            render json: {message: 'Login failed'}, status: 401
        end
    end
end
