import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './control-realizado.service';
import { ControlRealizadoGateway } from './control-realizado.gateway';
import { SequelizeModule } from '@nestjs/sequelize';
import { ControlRealizado } from './entities/control-realizado.entity';

@Module({
  imports: [ SequelizeModule.forFeature([ ControlRealizado ]) ],
  exports: [ SequelizeModule ],
  providers: [ControlRealizadoGateway, ControlRealizadoService],
})
export class ControlRealizadoModule {}
