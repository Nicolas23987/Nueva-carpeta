import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteResolver } from './estudiante.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Estudiante]) ],
  exports: [ TypeOrmModule ],
  providers: [EstudianteResolver, EstudianteService],
})
export class EstudianteModule {}
