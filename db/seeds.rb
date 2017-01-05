# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(full_name: "Guest", email: "guest@notebinder.com", username: "Guest", password: "123456") # id: 1
Notebook.create!(title: "First Notebook", author_id: 1) # id: 1
Notebook.create!(title: "Work", author_id: 1) # id: 2
Notebook.create!(title: "New York Restaurant Reviews", author_id: 1) # id: 3
Notebook.create!(title: "Travel Diary", author_id: 1) # id: 4
Notebook.create!(title: "Favorite Recipes", author_id: 1) # id: 5
Note.create!(title: "Welcome to NoteBinder!", body: "<p>NoteBinder is an Evernote-inspired web application built using Ruby on Rails and React/Redux! You can use it to write notes and save them to a database! Click on the 'New Note' (+) icon in the sidebar to create a new note!</p>", notebook_id: 1) # id: 1
Note.create!(title: "Notes", body: "<p>Your notes are all available in a scrollable 'Notes' index that is available for viewing whenever a note is being created or updated. You can click on the 'Notes' icon in the sidebar to view just the 'Notes' index itself.</p>", notebook_id: 1) # id: 2
Note.create!(title: "Notebooks", body: "<p>Click on the 'Notebooks' icon in the sidebar to get to the 'Notebooks' index. Once there, feel free to browse through notebooks and find notes corresponding to each notebook. To create a new notebook, click on the 'New Notebook' icon next to 'NOTEBOOKS'. IMPORTANT NOTE: The notebook's description must be less than 256 characters. Keep it short!</p>", notebook_id: 1) # id: 3
Note.create!(title: "Tags", body: "<p>You can create tags for note-filtering. To view all tags, click on the 'Tags' icon in the sidebar, which opens the 'Tags' index. You can either create a new tag there or when updating a note! Click on a tag from either the 'Tags index' or from a note to access all notes that have that tag.</p>", notebook_id: 1) # id: 4
Note.create!(title: "Updating", body: "<p>The contents of a note or notebook can be updated once it is created! You can update a note when viewing it, but getting access to notebook-updating requires visitng the 'Notebooks' index and clicking 'Update Notebook Details' for that specific notebook.</p>", notebook_id: 1) # id: 5
Note.create!(title: "Deleting", body: "<p>Notes, notebooks, and tags can also be deleted. When updating a note or notebook or viewing each tag of the 'Tags' index, note that there exists a 'Trash' icon for deleting the item. Be careful when deleting a notebook; it will delete all the notes in that notebook as well!</p>", notebook_id: 1) # id: 6
Note.create!(title: "Have fun exploring!", body: "<p>Create a new notebook or use one of the pre-created ones to start writing notes!</p>", notebook_id: 1) # id: 7
Tag.create!(name: "notebinder") # id: 1
Tag.create!(name: "welcome") # id: 2
Tag.create!(name: "introduction") # id: 3
Tag.create!(name: "notes") # id: 4
Tag.create!(name: "notebooks") # id: 5
Tag.create!(name: "tags") # id: 6
Tagging.create!(note_id: 1, tag_id: 1)
Tagging.create!(note_id: 1, tag_id: 2)
Tagging.create!(note_id: 1, tag_id: 3)
Tagging.create!(note_id: 2, tag_id: 1)
Tagging.create!(note_id: 2, tag_id: 4)
Tagging.create!(note_id: 3, tag_id: 1)
Tagging.create!(note_id: 3, tag_id: 5)
Tagging.create!(note_id: 4, tag_id: 1)
Tagging.create!(note_id: 4, tag_id: 6)
Tagging.create!(note_id: 5, tag_id: 1)
Tagging.create!(note_id: 6, tag_id: 1)
Tagging.create!(note_id: 7, tag_id: 1)
