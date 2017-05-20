class Api::V1::UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: {message: 'Succesfully created', user: user}, status: 200
        else
            render json: {message: 'Error', user: user, errors: user.errors.values.flatten}, status: 400
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :full_name, :type_user_id)
    end
end
