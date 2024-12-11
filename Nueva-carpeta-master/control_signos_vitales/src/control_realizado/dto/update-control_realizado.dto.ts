import { PartialType } from '@nestjs/mapped-types';
import { CreateControlRealizadoDto } from './create-control_realizado.dto';

export class UpdateControlRealizadoDto extends PartialType(CreateControlRealizadoDto) {
  id: number;
}
