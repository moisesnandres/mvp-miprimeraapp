class Company < ApplicationRecord
    belongs_to :category    
    validates :email, uniqueness: {message: 'Email debe ser único'}
end
