import { PartialType } from '@nestjs/mapped-types';
import { CreateControlRealizadoDto } from './create-control-realizado.dto';

export class UpdateControlRealizadoDto extends PartialType(CreateControlRealizadoDto) {
  id: number;
}
