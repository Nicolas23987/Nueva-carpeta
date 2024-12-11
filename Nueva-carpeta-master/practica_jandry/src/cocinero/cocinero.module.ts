import { Module } from '@nestjs/common';
import { CocineroService } from './cocinero.service';
import { CocineroController } from './cocinero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocinero } from './entities/cocinero.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Cocinero])],
  exports: [ TypeOrmModule ],
  controllers: [CocineroController],
  providers: [CocineroService],
})
export class CocineroModule {}
