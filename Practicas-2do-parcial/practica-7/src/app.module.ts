import { Module } from '@nestjs/common';
import { ControlIdiomaModule } from './control_idioma/control_idioma.module';
import { IdiomaModule } from './idioma/idioma.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { join } from 'path';
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [
    ControlIdiomaModule,
    IdiomaModule,
    EstudianteModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      introspection: true, 
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
