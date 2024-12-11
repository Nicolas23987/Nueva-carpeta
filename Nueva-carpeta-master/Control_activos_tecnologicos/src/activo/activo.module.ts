import { Module } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { ActivoController } from './activo.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Activo, ActivoSchema } from './entities/activo.entity';

@Module({
  imports : [  MongooseModule.forFeature([{name: Activo.name, schema: ActivoSchema} ]) ],
  exports : [ MongooseModule ],
  controllers: [ActivoController],
  providers: [ActivoService],
})
export class ActivoModule {}
