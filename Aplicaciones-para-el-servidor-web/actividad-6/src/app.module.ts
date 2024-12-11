import { Module } from '@nestjs/common';
import { PacienteModule } from './paciente/paciente.module';
import { SignoVitalModule } from './signo-vital/signo-vital.module';
import { ControlRealizadoModule } from './control-realizado/control-realizado.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [  
    PacienteModule,
     SignoVitalModule, 
     ControlRealizadoModule,
    
     SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'johnjcvc',
      database: 'pacientes',
      autoLoadModels: true,
      synchronize: true,
     })
    
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
