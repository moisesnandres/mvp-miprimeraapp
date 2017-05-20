class User < ApplicationRecord
    belongs_to :type_user, optional: true
    validates :email, uniqueness: {message: 'Email debe ser único'}
end
