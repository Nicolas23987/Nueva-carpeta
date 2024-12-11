import { Module } from '@nestjs/common';
import { ControlIdiomaModule } from './control_idioma/control_idioma.module';
import { IdiomaModule } from './idioma/idioma.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ControlIdiomaModule,
    IdiomaModule,
    EstudianteModule,
  
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      autoLoadEntities: true,
      database: 'idiomas',
      synchronize: true,
    }),
  
  ],

  controllers: [],
  providers: [],
})
export class AppModule { }
