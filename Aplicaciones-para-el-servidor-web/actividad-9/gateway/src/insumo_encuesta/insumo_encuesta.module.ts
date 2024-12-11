import { Module } from '@nestjs/common';
import { EncuestaModule } from './encuesta/encuesta.module';
import { PreguntaModule } from './pregunta/pregunta.module';

@Module({
  controllers: [],
  providers: [],
  imports: [EncuestaModule, InsumoEncuestaModule, PreguntaModule],
})
export class InsumoEncuestaModule {}
