class CreateAdministradors < ActiveRecord::Migration[7.2]
  def change
    create_table :administradores do |t|
      t.string :nombre
      t.string :email
      t.string :contraseña
      t.integer :rol_id
      t.string :foto_perfil
      t.datetime :fecha_creacion

      t.timestamps
    end
  end
end
