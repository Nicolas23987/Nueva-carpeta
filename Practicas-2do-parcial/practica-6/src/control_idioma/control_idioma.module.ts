import { Module } from '@nestjs/common';
import { ControlIdiomaService } from './control_idioma.service';
import { ControlIdiomaController } from './control_idioma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlIdioma } from './entities/control_idioma.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ControlIdioma]) ],
  exports: [ TypeOrmModule ],
  controllers: [ControlIdiomaController],
  providers: [ControlIdiomaService],
})
export class ControlIdiomaModule {}
