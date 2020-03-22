# frozen_string_literal: true

module Api
  # session controller
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )

      if @user
        login(@user)
        render :show
      else
        render json: ['Email/password combination invalid'], status: 401
      end
    end

    def destroy
      @user = current_user

      if @user
        logout
        render json: {}
      else
        render json: ['No current user found'], status: 404
      end
    end
  end
end
