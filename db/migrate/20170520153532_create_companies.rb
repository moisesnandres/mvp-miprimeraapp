class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :ruc
      t.string :description
      t.string :ubication
      t.string :sector

      t.timestamps
    end
  end
end
