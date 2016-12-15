json.ignore_nil!

json.extract! note, :id, :title, :body, :notebook_id

json.author_name note.author.full_name

json.tag_ids({})

json.tag_ids do
  note.tags.each do |tag|
    json.set! tag.id, tag.id
  end
end
