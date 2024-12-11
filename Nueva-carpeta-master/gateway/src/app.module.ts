import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats.module';
import { AuthModule } from './auth/auth.module';
import { ControlActivosTecnologicosModule } from './control_activos_tecnologicos/control_activos_tecnologicos.module';
import { ControlSignosVitalesModule } from './control_signos_vitales/control_signos_vitales.module';
import { PrepararRecetaModule } from './preparar_receta/preparar_receta.module';
import { InsumoEncuestaModule } from './insumo_encuesta/insumo_encuesta.module';


@Module({
  imports: [
    NatsModule,
    AuthModule,
    ControlActivosTecnologicosModule,
    ControlSignosVitalesModule,
    PrepararRecetaModule,
    InsumoEncuestaModule
  ],
})
export class AppModule { }
