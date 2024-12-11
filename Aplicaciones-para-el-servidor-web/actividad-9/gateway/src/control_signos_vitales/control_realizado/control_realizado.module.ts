import { Module } from '@nestjs/common';
import { ControlRealizadoController } from './control_realizado.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports : [ NatsModule ],
  exports: [ ],
  controllers: [ControlRealizadoController],
  providers: [],
})
export class ControlRealizadoModule {}
