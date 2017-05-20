class Api::V1::ProjectsController < ApplicationController


    def index
        @projects = Project.all
    end
    def create
        project = Project.new(project_params)
        if project.save
            render json: {message: 'Project succesfully created',  project: project}, status: 200
        else
            render json: {message: 'Error', project: project, errors: project.errors.values.flatten}, status: 400
        end
    end
    def delete
        project = Project.where(id: params[:project_id])
        if project.exists?
            project = project.last
            project.destroy
            if project.destroyed?
                render json: {message: 'Project succesfully cleared',  project: project}, status: 200
            else
                render json: {message: 'Can\'t destroy the project',  project: project}, status: 400
            end
        else
            render json: {message: 'The project doesn\'t exists',  project: project}, status: 400
        end
    end
    def update
        project = Project.where(id: params[:project_id])
        if project.exists?
            project = project.last
            if project.update(project_params)
                render json: {message: 'Project succesfully updated',  project: project}, status: 200
            else
                render json: {message: 'Error', project: project, errors: project.errors.values.flatten}, status: 400
            end
        else
            render json: {message: 'The project doesn\'t exists',  project: project}, status: 400
        end
    end
    private
    def project_params
        params.require(:project).permit(:name ,:description, :company_id, :step_id)
    end
end
