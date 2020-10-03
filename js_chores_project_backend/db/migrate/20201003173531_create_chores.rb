class CreateChores < ActiveRecord::Migration[6.0]
  def change
    create_table :chores do |t|
      t.text :task
      t.integer :duration
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
