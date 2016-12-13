class Api::TagsController < ApplicationController
  before_action :require_signed_in!, only: [:index, :create, :destroy]

  def index
    @tags = current_user.tags
    render :index
  end

  def create
    @note = Note.find(params[:note_id]) unless params[:note_id] == 'noId'
    @tag = Tag.find_by(name: params[:tag][:name])


    unless @tag
      @tag = Tag.new(tag_params)
      @tag.save
    end

    Tagging.create(note_id: @note.id, tag_id: @tag.id) unless params[:note_id] == 'noId'

    render :show
  end

  def show
    @tag = Tag.find(params[:id])
    render :show
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    Tagging.where({tag_id: @tag.id}).destroy_all
    render json: @tag.id
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end
