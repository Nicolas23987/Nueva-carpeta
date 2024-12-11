import { Module } from '@nestjs/common';
import { EncuestaController } from './encuesta.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [EncuestaController],
  providers: [],
})
export class EncuestaModule { }
