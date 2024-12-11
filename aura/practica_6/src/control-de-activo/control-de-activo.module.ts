import { Module } from '@nestjs/common';
import { ControlDeActivoService } from './control-de-activo.service';
import { ControlDeActivoController } from './control-de-activo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlDeActivo } from './entities/control-de-activo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ControlDeActivo])],
  exports: [TypeOrmModule],
  controllers: [ControlDeActivoController],
  providers: [ControlDeActivoService],
})
export class ControlDeActivoModule {}
