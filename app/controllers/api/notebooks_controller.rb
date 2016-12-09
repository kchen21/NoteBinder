class Api::NotebooksController < ApplicationController
  before_action :require_signed_in!, only: [:index, :create, :show, :destroy]

  def index
  end

  def create
    @notebook = current_user.notebooks.new(notebook_params)

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def show
  end

  def destroy
  end

  private

  def notebook_params

  end
end
