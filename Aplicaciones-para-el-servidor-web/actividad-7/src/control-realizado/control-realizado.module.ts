import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './control-realizado.service';
import { ControlRealizadoResolver } from './control-realizado.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { ControlRealizado } from './entities/control-realizado.entity';

@Module({
  imports: [ SequelizeModule.forFeature([ ControlRealizado ]) ],
  exports: [ SequelizeModule ],
  providers: [ControlRealizadoResolver, ControlRealizadoService],
})
export class ControlRealizadoModule {}
