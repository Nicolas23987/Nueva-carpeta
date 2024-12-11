class CreateHistorialSuscripcions < ActiveRecord::Migration[6.1]
    def change
      create_table :historial_suscripcions do |t|
        t.integer :user_id, null: false
        t.integer :plan_id, null: false
        t.date :fecha_inicio, null: false
        t.date :fecha_fin, null: false
        t.boolean :renovacion, default: false
  
        t.timestamps
      end
  
      add_foreign_key :historial_suscripcions, :planes, column: :plan_id
    end
    belongs_to :plan

    def renovar_suscripcion
      self.fecha_inicio = Date.today
      self.fecha_fin = Date.today + plan.duracion.days
      save
    end
    end

  end
  