import { Module } from '@nestjs/common';
import { PacienteModule } from './paciente/paciente.module';
import { SignoVitalModule } from './signo-vital/signo-vital.module';
import { ControlRealizadoModule } from './control-realizado/control-realizado.module';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [
    PacienteModule,
    SignoVitalModule,
    ControlRealizadoModule,

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    })

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
