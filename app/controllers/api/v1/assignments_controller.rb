class Api::V1::AssignmentsController < ApplicationController
	def create
		project = Project.where(id: params[:project_id])
		user = User.where(id: params[:user_id])
		assignment = Assignment.create(project_id: params[:project_id], user_id: params[:user_id])

        if project.exists?
            project = project.last
            if user.exists?
            	user = user.last
				if assignment.save
		            render json: {message: 'You\'re applied to the project', user: user, project: project, assignment: assignment}, status: 200
		        else
		            render json: {message: 'Error when create the assignment.', user: user, project: project}, status: 400
		        end
		    else
            	render json: {message: 'The user doesn\'t exists',  project: project}, status: 400
        	end
		else
            render json: {message: 'The project doesn\'t exists'}, status: 400
		end
	end

	def left
		assignment = Assignment.where(id: params[:assign_id])
		if assignment.exists?
		    assignment = assignment.last
		    assignment.destroy
		    if assignment.destroyed?
		    	render json: {message: 'You\'re left of the project.'}, status: 200
			else
		    	render json: {message: 'Error when you want to left.'}, status: 400
			end
		else
		    render json: {message: 'Assignment not found.'}, status: 400
		end
	end
	def aprobe
		assignment = Assignment.where(id: params[:assign_id])
		if assignment.exists?
		    assignment = assignment.last
            if assignment.update(status: true)
		    	render json: {message: 'The user are now aprobed for the project.'}, status: 200
			else
		    	render json: {message: 'Can\'t be aprobed the user.'}, status: 400
			end
		else
		    render json: {message: 'Assignment not found.'}, status: 400
		end
	end
end
