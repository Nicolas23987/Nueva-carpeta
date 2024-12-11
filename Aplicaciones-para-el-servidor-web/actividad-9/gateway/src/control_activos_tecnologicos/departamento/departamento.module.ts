import { Module } from '@nestjs/common';
import { DepartamentoController } from './departamento.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [DepartamentoController],
  providers: [],
  imports: [ NatsModule ]
})
export class DepartamentoModule {}
