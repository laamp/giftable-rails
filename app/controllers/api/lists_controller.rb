# frozen_string_literal: true

module Api
  # List controller
  class ListsController < ApplicationController
    def index
      if current_user.id == params[:user_id].to_i
        @lists = current_user.lists

        render :index
      else
        render json: ['These lists do not belong to you'], status: 401
      end
    end

    def create
      @list = List.new(list_params)
      @list.owner_id = params[:user_id].to_i

      if @list.save
        render :show
      else
        render @list.errors.full_messages, status: 422
      end
    end

    private

    def list_params
      params.require(:list).permit(:title, :event_date)
    end
  end
end
