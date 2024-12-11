import { Module } from '@nestjs/common';
import { InsumoEncuestaController } from './insumo_encuesta.controller';
import { NatsModule } from 'src/transports/nats.module';
import { NATS_SERVICE } from 'src/config';

@Module({
  imports: [ NatsModule ],
  controllers: [InsumoEncuestaController],
  providers: [],
})
export class InsumoEncuestaModule {}
