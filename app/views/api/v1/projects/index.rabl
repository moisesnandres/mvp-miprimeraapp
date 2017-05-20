collection :@projects
attributes :id, :name, :description, :percentage, :assignments_count
child(:company) do
    attributes :id, :name
end
child(:step) do
    attributes :id, :name
end