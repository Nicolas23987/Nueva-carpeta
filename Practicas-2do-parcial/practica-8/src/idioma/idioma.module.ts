import { Module } from '@nestjs/common';
import { IdiomaService } from './idioma.service';
import { IdiomaGateway } from './idioma.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './entities/idioma.entity';

@Module({
  imports : [ TypeOrmModule.forFeature([ Idioma ]) ],
  exports: [ TypeOrmModule ],
  providers: [IdiomaGateway, IdiomaService],
})
export class IdiomaModule {}
