class Api::V1::CompaniesController < ApplicationController   

    def create
        company = Company.new(company_params)
        if company.save
            render json: {message: 'Succesfully created', company: company}, status: 200
        else
            render json: {message: 'Error', company: company, errors: company.errors.values.flatten}, status: 400
        end
    end

    private
    def company_params
        params.require(:company).permit(:email, :password, :name, :ruc, :ubication, :description, :category_id, :sector)
    end
end
