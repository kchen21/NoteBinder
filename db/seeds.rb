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
Note.create!(title: "Welcome to Notebinder!", body: "Notebinder is an Evernote-inspired web application built using Ruby on Rails and React/Redux! You can use it to write notes and save them to a database!", notebook_id: 1) # id: 1
Note.create!(title: "Notes", body: "Your notes are all available here, to the left!", notebook_id: 1) # id: 2
Note.create!(title: "Notebooks", body: "Click on the Notebooks icon in the sidebar to browse through notebooks and find notes corresponding to each notebook.", notebook_id: 1) # id: 3
Note.create!(title: "Tags", body: "You can create tags for note-filtering. To view all tags, click on the Tags icon in the sidebar. You create a new tag here, or when creating or updating a note!", notebook_id: 1) # id: 4
Note.create!(title: "Updating", body: "The contents of a note or notebook can be updated once it is created!", notebook_id: 1) # id: 5
Note.create!(title: "Deleting", body: "Notes, notebooks, and tags can also be deleted! Be careful when deleting a notebook; it'll delete all the notes in that notebook as well!", notebook_id: 1) # id: 6
Note.create!(title: "Have fun exploring!", body: "Create a new notebook or use one of the pre-created ones to start writing notes!", notebook_id: 1) # id: 7
Tag.create!(name: "FirstTag") # id: 1
Tagging.create!(note_id: 1, tag_id: 1)
Tagging.create!(note_id: 4, tag_id: 1)
