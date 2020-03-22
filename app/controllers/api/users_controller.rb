# frozen_string_literal: true

module Api
  # user controller
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        login(@user)

        render 'api/sessions/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.find(params[:id])

      if @user
        render :show
      else
        render json: @user.errors.full_messages, status: 404
      end
    end

    def update
      @user = User.find(params[:id])

      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :name, :password)
    end
  end
end
