import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Paciente } from './entities/paciente.entity';

@Module({
  imports: [ SequelizeModule.forFeature([Paciente]) ],
  exports: [SequelizeModule],
  controllers: [PacienteController],
  providers: [PacienteService],
})
export class PacienteModule {}
