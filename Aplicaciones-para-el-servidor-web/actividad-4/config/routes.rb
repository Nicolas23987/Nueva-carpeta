Rails.application.routes.draw do
  namespace :api do
    namespace :suscripciones do
      # Rutas para planes de suscripción
      get 'planes', to: 'suscripciones#planes'          # Obtener la lista de planes
      post 'planes', to: 'suscripciones#create'         # Crear un nuevo plan
      put 'planes/:id', to: 'suscripciones#update'      # Actualizar un plan existente
      delete 'planes/:id', to: 'suscripciones#destroy'  # Eliminar un plan

      # Ruta para renovación automática
      post ':id/renovar', to: 'suscripciones#renovar'    # Configurar renovación automática

      # Ruta para historial de suscripciones
      get 'historial', to: 'suscripciones#historial'     # Obtener el historial de suscripciones
    end
  end
end
