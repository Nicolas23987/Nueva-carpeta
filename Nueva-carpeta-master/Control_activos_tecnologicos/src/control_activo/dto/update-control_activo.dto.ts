import { PartialType } from '@nestjs/mapped-types';
import { CreateControlDeActivoDto } from './create-control_activo.dto';

export class UpdateControlActivoDto extends PartialType(CreateControlDeActivoDto) {
  id: number;
}
