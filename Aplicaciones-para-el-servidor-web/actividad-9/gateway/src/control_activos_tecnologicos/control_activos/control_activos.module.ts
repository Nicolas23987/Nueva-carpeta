import { Module } from '@nestjs/common';
import { ControlActivoController } from './control_activos.controller';
import { NATS_SERVICE } from 'src/config';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ControlActivoController],
  providers: [],
  imports: [ NatsModule ]
})
export class ControlActivosModule {}
