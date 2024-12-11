import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [PacienteController],
  providers: [],
})
export class PacienteModule {}
