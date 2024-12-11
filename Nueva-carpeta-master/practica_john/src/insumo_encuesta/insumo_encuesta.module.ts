import { Module } from '@nestjs/common';
import { InsumoEncuestaController } from './insumo_encuesta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsumoDeEncuesta } from './entities/insumo_encuesta.entity';
import { InsumoDeEncuestaService } from './insumo_encuesta.service';

@Module({
  imports: [ TypeOrmModule.forFeature([InsumoDeEncuesta])],
  exports: [ TypeOrmModule ],
  controllers: [InsumoEncuestaController],
  providers: [InsumoDeEncuestaService],
})
export class InsumoEncuestaModule {}
