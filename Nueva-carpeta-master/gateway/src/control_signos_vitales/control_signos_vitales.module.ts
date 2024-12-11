import { Module } from '@nestjs/common';
import { ControlRealizadoModule } from './control_realizado/control_realizado.module';
import { PacienteModule } from './paciente/paciente.module';
import { SignosVitalesModule } from './signos_vitales/signos_vitales.module';

@Module({
  controllers: [],
  providers: [],
  imports: [ControlRealizadoModule, PacienteModule, SignosVitalesModule]
})
export class ControlSignosVitalesModule {}
