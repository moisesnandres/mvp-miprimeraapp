class AddCategoryToCompany < ActiveRecord::Migration[5.1]
  def change
    add_reference :companies, :category, foreign_key: true
  end
end
