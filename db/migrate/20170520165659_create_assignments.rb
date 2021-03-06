class CreateAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :assignments do |t|
      t.references :project, foreign_key: true
      t.references :user, foreign_key: true
      t.boolean :status

      t.timestamps
    end
  end
end
