json.array! @notes do |note|
  json.note.id do
    json.extract! :id, :title, :body, :author_id, :notebook_id
  end
end
