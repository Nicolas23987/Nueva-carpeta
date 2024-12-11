import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteGateway } from './paciente.gateway';
import { SequelizeModule } from '@nestjs/sequelize';
import { Paciente } from './entities/paciente.entity';

@Module({
  imports: [ SequelizeModule.forFeature([Paciente]) ],
  exports: [ SequelizeModule ],
  providers: [PacienteGateway, PacienteService],
})
export class PacienteModule {}
