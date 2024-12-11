import { Module } from '@nestjs/common';
import { ControlIdiomaService } from './control_idioma.service';
import { ControlIdiomaResolver } from './control_idioma.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlIdioma } from './entities/control_idioma.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ControlIdioma]) ],
  exports: [ TypeOrmModule ],
  providers: [ControlIdiomaResolver, ControlIdiomaService],
})
export class ControlIdiomaModule {}
