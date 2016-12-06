class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to api_user_url(@user)
    else
      render json: ["Incorrect username or password"], status: 422
    end
  end

  def destroy
    if signed_in?
      log_out
      render json: {}
    else
      render json: ["Session not found"], status: 404
    end
  end
end
