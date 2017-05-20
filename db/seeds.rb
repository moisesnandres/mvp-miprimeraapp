# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TypeUser.create(name: 'Manager')
TypeUser.create(name: 'Backend Developer')
TypeUser.create(name: 'FrontEnd Developer')
TypeUser.create(name: 'Designer')

Category.create(name: 'Colegio')
Category.create(name: 'Empresa')
Category.create(name: 'Hospital')

user1 = User.create(email: 'fabian@rrr.com', password: '123123123')
user1 = User.create(email: 'luis@rrr.com', password: '123123123')

com1 = Company.create(email: 'company1@rrr.com', password: '123123123', ruc: '12345678', category: Category.first, description: 'Lorem ipsum.', sector: 'Educación')
com2 = Company.create(email: 'company2@rrr.com', password: '123123123', ruc: '23456789', category: Category.second, description: 'Lorem ipsum.', sector: 'Salud')