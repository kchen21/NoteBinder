# == Schema Information
#
# Table name: notebooks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notebook < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, uniqueness: { scope: :author_id }

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  has_many :notes
end
