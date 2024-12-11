import { Module } from '@nestjs/common';
import { ControlIdiomaService } from './control_idioma.service';
import { ControlIdiomaGateway } from './control_idioma.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlIdioma } from './entities/control_idioma.entity';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { Idioma } from 'src/idioma/entities/idioma.entity';

@Module({
  imports : [ TypeOrmModule.forFeature([ControlIdioma, Estudiante, Idioma]) ],
  exports: [ TypeOrmModule ],
  providers: [ControlIdiomaGateway, ControlIdiomaService],
})
export class ControlIdiomaModule {}
