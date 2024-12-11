# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_10_06_071914) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "administradors", force: :cascade do |t|
    t.string "nombre"
    t.string "email"
    t.string "contraseña"
    t.integer "rol_id"
    t.string "foto_perfil"
    t.datetime "fecha_creacion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "beneficios", id: :serial, force: :cascade do |t|
    t.string "descripcion", limit: 255
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "clases", id: :serial, force: :cascade do |t|
    t.string "nombre", limit: 100
    t.text "descripcion"
    t.integer "entrenador_id"
    t.integer "duracion"
    t.date "fecha"
    t.time "hora"
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "compras", id: :serial, force: :cascade do |t|
    t.integer "usuario_id"
    t.integer "producto_id"
    t.integer "cantidad"
    t.decimal "total", precision: 10, scale: 2
    t.date "fecha_compra"
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "entrenadores", id: :serial, force: :cascade do |t|
    t.string "nombre", limit: 100
    t.string "especialidad", limit: 100
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "facturas", force: :cascade do |t|
    t.integer "usuario_id"
    t.decimal "monto"
    t.string "estado"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "historial_suscripciones", id: :serial, force: :cascade do |t|
    t.integer "usuario_id"
    t.integer "plan_id"
    t.date "fecha_inicio"
    t.date "fecha_fin"
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "historial_suscripcions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "plan_id"
    t.date "fecha_inicio"
    t.date "fecha_fin"
    t.boolean "renovacion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notificaciones", id: :serial, force: :cascade do |t|
    t.integer "usuario_id"
    t.text "mensaje"
    t.boolean "leido", default: false
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "pagos", id: :serial, force: :cascade do |t|
    t.integer "usuario_id"
    t.integer "plan_id"
    t.decimal "monto", precision: 10, scale: 2
    t.date "fecha_pago"
    t.string "metodo_pago", limit: 50
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "planes", id: :serial, force: :cascade do |t|
    t.string "nombre", limit: 100
    t.decimal "precio", precision: 10, scale: 2
    t.integer "duracion"
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "planes_beneficios", primary_key: ["plan_id", "beneficio_id"], force: :cascade do |t|
    t.integer "plan_id", null: false
    t.integer "beneficio_id", null: false
  end

  create_table "productos", id: :serial, force: :cascade do |t|
    t.string "nombre", limit: 100
    t.decimal "precio", precision: 10, scale: 2
    t.integer "stock"
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "reservas", id: :serial, force: :cascade do |t|
    t.integer "usuario_id"
    t.integer "clase_id"
    t.date "fecha_reserva"
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "roles", id: :serial, force: :cascade do |t|
    t.string "nombre", limit: 50
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "suscripcions", force: :cascade do |t|
    t.string "nombre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transaccions", force: :cascade do |t|
    t.integer "usuario_id"
    t.decimal "monto"
    t.string "estado"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuario_roles", primary_key: ["usuario_id", "rol_id"], force: :cascade do |t|
    t.integer "usuario_id", null: false
    t.integer "rol_id", null: false
  end

  create_table "usuarios", id: :serial, force: :cascade do |t|
    t.string "nombre", limit: 100
    t.string "correo", limit: 100
    t.string "contrasena", limit: 255
    t.timestamptz "created_at", default: -> { "CURRENT_TIMESTAMP" }
    t.timestamptz "updated_at", default: -> { "CURRENT_TIMESTAMP" }
  end

  add_foreign_key "clases", "entrenadores", column: "entrenador_id", name: "clases_entrenador_id_fkey", on_delete: :nullify
  add_foreign_key "compras", "productos", name: "compras_producto_id_fkey", on_delete: :cascade
  add_foreign_key "compras", "usuarios", name: "compras_usuario_id_fkey", on_delete: :cascade
  add_foreign_key "historial_suscripciones", "planes", column: "plan_id", name: "historial_suscripciones_plan_id_fkey", on_delete: :cascade
  add_foreign_key "historial_suscripciones", "usuarios", name: "historial_suscripciones_usuario_id_fkey", on_delete: :cascade
  add_foreign_key "notificaciones", "usuarios", name: "notificaciones_usuario_id_fkey", on_delete: :cascade
  add_foreign_key "pagos", "planes", column: "plan_id", name: "pagos_plan_id_fkey", on_delete: :cascade
  add_foreign_key "pagos", "usuarios", name: "pagos_usuario_id_fkey", on_delete: :cascade
  add_foreign_key "planes_beneficios", "beneficios", name: "planes_beneficios_beneficio_id_fkey", on_delete: :cascade
  add_foreign_key "planes_beneficios", "planes", column: "plan_id", name: "planes_beneficios_plan_id_fkey", on_delete: :cascade
  add_foreign_key "reservas", "clases", name: "reservas_clase_id_fkey", on_delete: :cascade
  add_foreign_key "reservas", "usuarios", name: "reservas_usuario_id_fkey", on_delete: :cascade
  add_foreign_key "usuario_roles", "roles", column: "rol_id", name: "usuario_roles_rol_id_fkey", on_delete: :cascade
  add_foreign_key "usuario_roles", "usuarios", name: "usuario_roles_usuario_id_fkey", on_delete: :cascade
end
