class Company < ApplicationRecord
    belongs_to :category    
    validates :email, uniqueness: {message: 'Email debe ser único'}
    validates :email, presence: {message: 'Email no puede estar en blanco'}
    validates :password, presence: {message: 'Contraseña no puede estar en blanco'}
    validates :ruc, presence: {message: 'Email no puede estar en blanco'}
    validates :ubication, presence: {message: 'Contraseña no puede estar en blanco'}
    validates :description, presence: {message: 'Email no puede estar en blanco'}
    validates :sector, presence: {message: 'Contraseña no puede estar en blanco'}
end
