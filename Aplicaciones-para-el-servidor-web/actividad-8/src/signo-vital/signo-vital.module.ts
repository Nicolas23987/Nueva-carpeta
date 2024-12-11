import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo-vital.service';
import { SignoVitalGateway } from './signo-vital.gateway';
import { SequelizeModule } from '@nestjs/sequelize';
import { SignoVital } from './entities/signo-vital.entity';

@Module({
  imports: [ SequelizeModule.forFeature([ SignoVital ]) ],
  exports: [ SequelizeModule ],
  providers: [SignoVitalGateway, SignoVitalService],
})
export class SignoVitalModule {}
