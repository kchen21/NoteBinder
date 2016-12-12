json.extract! notebook, :id, :title, :description, :author_id

json.num_of_notes notebook.notes.length
