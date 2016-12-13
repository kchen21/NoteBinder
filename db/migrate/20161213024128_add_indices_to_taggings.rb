class AddIndicesToTaggings < ActiveRecord::Migration[5.0]
  def change
    add_index :taggings, :note_id
    add_index :taggings, :tag_id
  end
end
