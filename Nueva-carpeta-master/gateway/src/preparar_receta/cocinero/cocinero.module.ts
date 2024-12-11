import { Module } from '@nestjs/common';
import { CocineroController } from './cocinero.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [ NatsModule ],
  controllers: [CocineroController],
  providers: [],
})
export class CocineroModule {}
