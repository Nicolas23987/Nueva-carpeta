import { PartialType } from '@nestjs/mapped-types';
import { CreateSignosVitaleDto } from './create-signos_vitale.dto';

export class UpdateSignosVitaleDto extends PartialType(CreateSignosVitaleDto) {}
