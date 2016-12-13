class Api::TagsController < ApplicationController
  before_action :require_signed_in!, only: [:index, :create, :destroy]

  def index
    @tags = current_user.tags
    render :index
  end

  def create
    @note = Note.find_by(params[:note_id])
    @tag = Tag.find_by(name: params[:tag][:name]) || Tag.create(tag_params)

    Tagging.create(note_id: @note.id, tag_id: @tag.id)
    render :show
  end

  def show
    @tag = Tag.find(params[:id])
    render :show
  end

  def destroy
    @note = Note.find_by(params[:note_id])
    @tag = Tag.find_by(name: params[:tag_name])

    Tagging.where(note_id: @note.id, tag_id: @tag.id).destroy
    render json: [note.id, tag.id]
  end

  private

  def tags_params
    params.require(:tag).permit(:name)
  end
end
