json.ignore_nil!

json.extract! notebook, :id, :title, :description, :author_id

json.note_ids({})

json.note_ids do
  notebook.notes.each do |note|
    json.set! note.id, note.id
  end
end
