import { PartialType } from '@nestjs/mapped-types';
import { CreateControlActivoDto } from './create-control_activo.dto';

export class UpdateControlActivoDto extends PartialType(CreateControlActivoDto) {}
