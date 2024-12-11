import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo-vital.service';
import { SignoVitalController } from './signo-vital.controller';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { SignoVital } from './entities/signo-vital.entity';

@Module({
  imports: [ SequelizeModule.forFeature([SignoVital]) ],
  exports: [ SequelizeModule ],
  controllers: [SignoVitalController],
  providers: [SignoVitalService],
})
export class SignoVitalModule {}
