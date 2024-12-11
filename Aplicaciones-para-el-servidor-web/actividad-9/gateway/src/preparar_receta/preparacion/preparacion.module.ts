import { Module } from '@nestjs/common';
import { PreparacionController } from './preparacion.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [ NatsModule ],
  controllers: [PreparacionController],
  providers: [],
})
export class PreparacionModule {}
