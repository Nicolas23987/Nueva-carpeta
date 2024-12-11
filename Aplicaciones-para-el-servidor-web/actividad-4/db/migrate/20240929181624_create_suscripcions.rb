class CreateSuscripcions < ActiveRecord::Migration[7.2]
  def change
    create_table :suscripciones do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
