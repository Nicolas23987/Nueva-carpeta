# app/controllers/api/suscripciones_controller.rb
class Api::SuscripcionesController < ApplicationController
  # Método para obtener la lista de planes de suscripción
  def planes
    @planes = Plan.all
    render json: @planes
  end

  def create
    @plan = Plan.new(plan_params)
    if @plan.save
      render json: @plan, status: :created
    else
      render json: @plan.errors, status: :unprocessable_entity
    end
  end

  def update
    @plan = Plan.find(params[:id])
    if @plan.update(plan_params)
      render json: @plan
    else
      render json: @plan.errors, status: :unprocessable_entity
    end
  end

  # Método para eliminar un plan
  def destroy
    @plan = Plan.find(params[:id])
    @plan.destroy
    head :no_content
  end

  # Método para configurar renovación automática
  def renovar
    # Lógica para renovar suscripción
    render json: { message: "Renovación automática configurada" }
  end

  # Método para obtener el historial de suscripciones
  def historial
    # Lógica para obtener el historial de suscripciones
    render json: { message: "Historial de suscripciones" }
  end

  private

  def plan_params
    params.require(:plan).permit(:nombre, :precio, :duracion)
  end
end


Rails.application.routes.draw do
  namespace :api do
    namespace :suscripciones do
      # (rutas de suscripciones previamente definidas)
    end

    namespace :pagos do
      # Ruta para procesar un pago
      post 'realizar', to: 'pagos#realizar'               # Procesar un pago

      # Ruta para obtener el historial de facturas
      get 'facturas', to: 'pagos#facturas'               # Obtener historial de facturas

      # Ruta para obtener el historial de transacciones
      get 'transacciones', to: 'pagos#transacciones'     # Obtener historial de transacciones
    end
  end
end
