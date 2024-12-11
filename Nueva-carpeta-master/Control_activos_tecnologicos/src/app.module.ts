import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Activo, ActivoSchema } from './activo/entities/activo.entity';
import { Departamento, DepartamentoSchema } from './departamento/entities/departamento.entity';
import { ControlDeActivo, ControlDeActivoSchema } from './control_activo/entities/control_activo.entity';
import { ControlActivoModule } from './control_activo/control_activo.module';
import { ActivoModule } from './activo/activo.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ControlActivoModule,
    DepartamentoModule,
    ActivoModule,
    
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: Activo.name, schema: ActivoSchema },
      { name: Departamento.name, schema: DepartamentoSchema },
      { name: ControlDeActivo.name, schema: ControlDeActivoSchema },
    ]),

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
