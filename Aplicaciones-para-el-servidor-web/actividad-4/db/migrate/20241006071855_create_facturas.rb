class CreateFacturas < ActiveRecord::Migration[7.2]
  def change
    create_table :facturas do |t|
      t.integer :usuario_id
      t.decimal :monto
      t.string :estado

      t.timestamps
    end
  end
end
