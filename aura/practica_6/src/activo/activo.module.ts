import { Module } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { ActivoController } from './activo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activo } from './entities/activo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activo])],
  exports: [TypeOrmModule],
  controllers: [ActivoController],
  providers: [ActivoService],
})
export class ActivoModule {}
