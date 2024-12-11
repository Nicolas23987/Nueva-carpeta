import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo-vital.service';
import { SignoVitalResolver } from './signo-vital.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { SignoVital } from './entities/signo-vital.entity';

@Module({
  imports: [ SequelizeModule.forFeature([ SignoVital ]) ],
  exports: [ SequelizeModule ],
  providers: [SignoVitalResolver, SignoVitalService],
})
export class SignoVitalModule {}
