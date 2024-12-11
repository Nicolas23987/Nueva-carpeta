import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteResolver } from './paciente.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Paciente } from './entities/paciente.entity';

@Module({
  imports: [ SequelizeModule.forFeature([ Paciente ]) ],
  exports: [ SequelizeModule ],
  providers: [PacienteResolver, PacienteService],
})
export class PacienteModule {}
