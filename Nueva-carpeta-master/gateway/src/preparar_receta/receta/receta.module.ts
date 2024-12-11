import { Module } from '@nestjs/common';
import { RecetaController } from './receta.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [ NatsModule ],
  controllers: [RecetaController],
  providers: [],
})
export class RecetaModule {}
