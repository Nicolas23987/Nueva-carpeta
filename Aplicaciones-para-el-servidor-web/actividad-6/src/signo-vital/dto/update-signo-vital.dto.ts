import { PartialType } from '@nestjs/mapped-types';
import { CreateSignoVitalDto } from './create-signo-vital.dto';

export class UpdateSignoVitalDto extends PartialType(CreateSignoVitalDto) {
  id: number;
}
