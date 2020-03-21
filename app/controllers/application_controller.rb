# frozen_string_literal: true

# main controller for giftable application
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token, if: :json_request?

  helper_method :current_user, :logged_in?

  def json_request?
    request.format.json?
  end

  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    return if current_user

    render json: { base: ['invalid credentials'] }, status: 401
  end
end
