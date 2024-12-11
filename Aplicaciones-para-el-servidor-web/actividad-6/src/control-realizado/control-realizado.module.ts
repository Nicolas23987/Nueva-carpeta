import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './control-realizado.service';
import { ControlRealizadoController } from './control-realizado.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ControlRealizado } from './entities/control-realizado.entity';

@Module({
  imports: [ SequelizeModule.forFeature([ControlRealizado]) ],
  exports: [ SequelizeModule ],
  controllers: [ControlRealizadoController],
  providers: [ControlRealizadoService],
})
export class ControlRealizadoModule {}
