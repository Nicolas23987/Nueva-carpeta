import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivoModule } from './activo/activo.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { ControlDeActivoModule } from './control-de-activo/control-de-activo.module';
import { Departamento } from './departamento/entities/departamento.entity';
import { ControlDeActivo } from './control-de-activo/entities/control-de-activo.entity';
import { Activo } from './activo/entities/activo.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Departamento, ControlDeActivo, Activo],
      logger: 'advanced-console'
    }),
    ActivoModule,
    DepartamentoModule,
    ControlDeActivoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
