class AddPasswordToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :password, :string
  end
end
