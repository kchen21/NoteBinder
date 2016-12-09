# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(full_name: "Guest", email: "guest@notebinder.com", username: "Guest", password: "123456")
Notebook.create!(title: "First Notebook", author_id: 1)
Note.create!(title: "Welcome to Notebinder!", body: "Use the sidebar buttons to add a note or browse through notes!", notebook_id: 1)
