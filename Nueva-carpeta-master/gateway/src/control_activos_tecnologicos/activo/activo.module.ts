import { Module } from '@nestjs/common';
import { ActivoController } from './activo.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ActivoController],
  providers: [ NatsModule ],
  imports: [NatsModule]
})
export class ActivoModule {}
