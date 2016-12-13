json.extract! tag, :id, :name

json.note_ids do
  tag.notes.each do |note|
    json.set! note.id, note.id
  end
end
