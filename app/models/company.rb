class Company < ApplicationRecord    
    validates :email, uniqueness: {message: 'Email debe ser único'}
end
