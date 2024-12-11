import { Module } from '@nestjs/common';
import { PreguntaController } from './pregunta.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [ NatsModule ],
  controllers: [PreguntaController],
  providers: [],
})
export class PreguntaModule {}
