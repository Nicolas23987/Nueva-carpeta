class CreatePlans < ActiveRecord::Migration[7.2]
  def change
    create_table :planes do |t|
      t.string :nombre
      t.decimal :precio
      t.integer :duracion

      t.timestamps
    end
  end
end
