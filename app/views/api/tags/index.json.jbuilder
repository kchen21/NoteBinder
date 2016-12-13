json.tags do
  @notes.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :name
    end
  end
end
