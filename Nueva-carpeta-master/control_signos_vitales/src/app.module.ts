import { Module } from '@nestjs/common';
import { PacienteModule } from './paciente/paciente.module';
import { SignoVitalModule } from './signo_vital/signo_vital.module';
import { ControlRealizadoModule } from './control_realizado/control_realizado.module';
import { SignoVital } from './signo_vital/entities/signo_vital.entity';
import { Paciente } from './paciente/entities/paciente.entity';
import { ControlRealizado } from './control_realizado/entities/control_realizado.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [
    PacienteModule,
    SignoVitalModule,
    ControlRealizadoModule,

      ConfigModule.forRoot({
        isGlobal: true,
      }),
  
      SequelizeModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          dialect: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          models: [SignoVital, Paciente, ControlRealizado],
          autoLoadModels: true,  
          synchronize: true,  
        }),
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
