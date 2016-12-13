class Api::NotebooksController < ApplicationController
  before_action :require_signed_in!, only: [:index, :create, :show, :update, :destroy]

  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def create
    @notebook = current_user.notebooks.new(notebook_params)
    @notebook.author_id = current_user.id

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def show
    @notebook = current_user.notebooks.find(params[:id])
    render :show
  end

  def update
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook.update(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook
      @notebook.destroy
      @notebook.notes.destroy_all
      render json: @notebook.id
    else
      render json: ["Notebook not found"], status: 404
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :description)
  end
end
