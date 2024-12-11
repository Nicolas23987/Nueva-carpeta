import { IsString } from 'class-validator';

export class CreateRecetaDto {
  @IsString()
  nombre_plato: string;

  @IsString()
  ingredientes: string;

  @IsString()
  cantidades: string;
}
