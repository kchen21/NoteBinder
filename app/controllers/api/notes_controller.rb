class Api::NotesController < ApplicationController
  before_action :require_signed_in!, only: [:index, :create, :show, :update, :destroy]

  def index
    @notes = add_to_notes(current_user.notes.all)
    render :index
  end

  def create
    @note = current_user.notes.new(note_params)

    if note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = add_to_note(current_user.notes.find(params[:id]))
    render :show
  end

  def update
    @note = current_user.notes.find(params[:id])

    if @note.update(note_params)
      redirect_to api_note_url(@note)
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
    new_params = params.require(:note).permit(:title, :body, :notebook_title)
    new_params[notebook_id] = Notebook.find_by(title: new_params[:notebook_title]).id
    new_params.delete(:notebook_title)
    new_params
  end

  def add_to_note(note)
    new_note = note.dup
    new_note.author_id = note.author.id
    new_note
  end

  def add_to_notes(notes)
    new_notes = [];
    notes.each do |note|
      new_notes << add_info_to_note(note)
    end
    new_notes
  end
end
