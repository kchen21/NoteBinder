json.ignore_nil!

json.extract! notebook, :id, :title, :author_id

json.description notebook.description.to_s

json.note_ids({})

json.note_ids do
  notebook.notes.each do |note|
    json.set! note.id, note.id
  end
end
