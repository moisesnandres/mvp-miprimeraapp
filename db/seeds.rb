# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Assignment.destroy_all; Project.destroy_all; User.destroy_all; Company.destroy_all

TypeUser.create(name: 'Manager')
TypeUser.create(name: 'Backend Developer')
TypeUser.create(name: 'FrontEnd Developer')
TypeUser.create(name: 'Designer')

Category.create(name: 'Colegio')
Category.create(name: 'Empresa')
Category.create(name: 'Hospital')

Step.create(name: 'Espera')
Step.create(name: 'Inicial')
Step.create(name: 'Medio')
Step.create(name: 'Final')
Step.create(name: 'Terminado')

user1 = User.create(email: 'fabian@rrr.com', password: '123123123', type_user: TypeUser.first, full_name: 'Fabian Peña')
user1 = User.create(email: 'luis@rrr.com', password: '123123123', type_user: TypeUser.second, full_name: 'Luis Uculmana')

com1 = Company.create(email: 'company1@rrr.com', password: '123123123', ruc: '12345678', category: Category.first, description: 'Lorem ipsum.', sector: 'Educación', name: 'Colegio X', ubication: 'Ica')
puts com1.errors.messages
com2 = Company.create(email: 'company2@rrr.com', password: '123123123', ruc: '23456789', category: Category.second, description: 'Lorem ipsum.', sector: 'Salud', name: 'Hospital X', ubication: 'Lima')

pro1 = Project.create(name: 'Proyecto X', step: Step.first, company: Company.first, description: 'Pro Pro Pro Pro Pro Pro Pro Pro Pro Pro Pro Pro')
puts pro1.errors.messages
pro2 = Project.create(name: 'Proyecto Y', step: Step.first, company: Company.second, description: 'Pro Pro Pro Pro Pro Pro Pro Pro Pro Pro Pro Proaaaaa')
puts pro2.errors.messages
assi = Assignment.create(project: Project.first, user: User.first, status: false)