class AddIndexToNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_index :notebooks, :title, unique: true
  end
end
