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
  end
end
