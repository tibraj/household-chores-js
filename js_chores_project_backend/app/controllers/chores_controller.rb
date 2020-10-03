class ChoresController < ApplicationController

    def index 
        chores = Chore.all 
        render json: chores
    end

    def show 
        chore = Chore.find(params[:id])
        render json :chore
    end

    def create
        chore = Chore.new(chore_params)
        if chore.save 
            render json :chore 
        else 
            render json: {errors: chore.errors.full_messages}
        end 
    end

    private

    def chore_params
        params.require(:chore).permit(:task, :duration, :user_id)
    end

end