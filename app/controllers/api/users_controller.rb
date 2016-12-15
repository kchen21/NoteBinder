class Api::UsersController < ApplicationController
  before_action :require_signed_in!, only: [:update, :show]

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:full_name, :email, :username, :password, :avatar)
  end
end
