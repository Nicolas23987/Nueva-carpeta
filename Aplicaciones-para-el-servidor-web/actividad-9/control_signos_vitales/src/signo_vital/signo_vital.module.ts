import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo_vital.service';
import { SignoVitalController } from './signo_vital.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SignoVital } from './entities/signo_vital.entity';

@Module({
  imports: [ SequelizeModule.forFeature([SignoVital]) ],
  exports: [SequelizeModule],
  controllers: [SignoVitalController],
  providers: [SignoVitalService],
})
export class SignoVitalModule {}
