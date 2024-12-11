import { Module } from '@nestjs/common';
import { EstudianteModule } from './estudiante/estudiante.module';
import { IdiomaModule } from './idioma/idioma.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlIdiomaModule } from './control_idioma/control_idioma.module';
import * as dotenv from 'dotenv'
dotenv.config()

@Module({

  imports: [
    EstudianteModule,
    IdiomaModule,
    ControlIdiomaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
