class User < ApplicationRecord
    belongs_to :type_user, optional: true
    validates :email, uniqueness: {message: 'Email ya existe'}
    validates :email, presence: {message: 'Email no puede estar en blanco'}
    validates :password, presence: {message: 'Contraseña no puede estar en blanco'}
end
