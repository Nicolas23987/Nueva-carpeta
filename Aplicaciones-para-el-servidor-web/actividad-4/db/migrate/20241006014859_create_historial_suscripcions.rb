class CreateHistorialSuscripcions < ActiveRecord::Migration[7.2]
  def change
    create_table :historial_suscripciones do |t|
      t.integer :user_id
      t.integer :plan_id
      t.date :fecha_inicio
      t.date :fecha_fin
      t.boolean :renovacion

      t.timestamps
    end
  end
end
