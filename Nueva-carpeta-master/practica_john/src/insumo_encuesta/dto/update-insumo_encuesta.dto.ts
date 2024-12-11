import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoEncuestaDto } from './create-insumo_encuesta.dto';

export class UpdateInsumoEncuestaDto extends PartialType(CreateInsumoEncuestaDto) {
  id: number;
}
