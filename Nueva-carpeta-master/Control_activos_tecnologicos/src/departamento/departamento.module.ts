import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { Departamento, DepartamentoSchema } from './entities/departamento.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [  MongooseModule.forFeature([{ name: Departamento.name, schema: DepartamentoSchema}]) ],
  exports : [ MongooseModule ],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}
