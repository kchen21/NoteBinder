class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def log_out
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_signed_in!
    render json: ["Session not found"] unless signed_in?
  end
end
