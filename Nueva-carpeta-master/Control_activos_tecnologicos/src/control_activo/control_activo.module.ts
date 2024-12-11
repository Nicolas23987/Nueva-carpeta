import { Module } from '@nestjs/common';
import { ControlActivoService } from './control_activo.service';
import { ControlActivoController } from './control_activo.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ControlDeActivo, ControlDeActivoSchema } from './entities/control_activo.entity';

@Module({
  imports : [  MongooseModule.forFeature([ {name: ControlDeActivo.name, schema: ControlDeActivoSchema } ]) ],
  exports : [ MongooseModule ],
  controllers: [ControlActivoController],
  providers: [ControlActivoService],
})
export class ControlActivoModule {}
