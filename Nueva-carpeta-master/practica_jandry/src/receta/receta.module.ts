import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RecetaController } from './receta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Receta])],
  exports: [ TypeOrmModule ],
  controllers: [RecetaController],
  providers: [RecetaService],
})
export class RecetaModule {}
