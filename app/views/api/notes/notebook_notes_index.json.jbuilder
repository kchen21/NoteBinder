@notes.each do |note|
  json.set! note.id, note.id
end
