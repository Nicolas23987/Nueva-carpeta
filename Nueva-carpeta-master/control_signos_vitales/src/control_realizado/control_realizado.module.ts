import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './control_realizado.service';
import { ControlRealizadoController } from './control_realizado.controller';
import { ControlRealizado } from './entities/control_realizado.entity';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [ SequelizeModule.forFeature([ControlRealizado])],
  exports: [ SequelizeModule ],
  controllers: [ControlRealizadoController],
  providers: [ControlRealizadoService],
})
export class ControlRealizadoModule {}
