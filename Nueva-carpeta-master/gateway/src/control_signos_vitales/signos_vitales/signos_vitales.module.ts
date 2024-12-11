import { Module } from '@nestjs/common';
import { SignosVitalesController } from './signos_vitales.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [SignosVitalesController],
  providers: [],
})
export class SignosVitalesModule {}
