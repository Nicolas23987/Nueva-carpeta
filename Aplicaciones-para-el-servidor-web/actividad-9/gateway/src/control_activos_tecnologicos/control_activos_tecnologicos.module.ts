import { Module } from '@nestjs/common';
import { NatsModule } from 'src/transports/nats.module';
import { ControlActivosModule } from './control_activos/control_activos.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { ActivoModule } from './activo/activo.module';

@Module({
  controllers: [],
  imports: [NatsModule, ControlActivosModule, DepartamentoModule, ActivoModule]
})
export class ControlActivosTecnologicosModule {}
