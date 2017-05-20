class TypeUser < ApplicationRecord
    validates :name, uniqueness: true
end
