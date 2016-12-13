class Api::NotesController < ApplicationController
  before_action :require_signed_in!, only: [:index, :create, :show, :update, :destroy]

  def index
      @notes = current_user.notes
      render :index
  end

  def create
    @note = current_user.notes.new(note_params)

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = current_user.notes.find(params[:id])
    render :show
  end

  def update
    @note = current_user.notes.find(params[:id])

    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])

    if @note
      @note.destroy
      render json: @note.id
    else
      render json: ["Note not found"], status: 404
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end
