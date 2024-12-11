import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteGateway } from './estudiante.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Module({
  imports : [ TypeOrmModule.forFeature([ Estudiante ]) ],
  exports: [ TypeOrmModule ],
  providers: [EstudianteGateway, EstudianteService],
})
export class EstudianteModule {}
