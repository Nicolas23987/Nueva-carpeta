import { IsNumber, IsString, IsDate, IsInt } from 'class-validator';

export class CreatePreparacionDto {
  @IsNumber()
  id_mesero: number;

  @IsNumber()
  id_receta: number;

  @IsDate()
  fecha: string;

  @IsString()
  hora: string;

  @IsInt()
  cantidad_a_preparar: number;

  @IsNumber()
  costo: number;

  @IsInt()
  tiempo: number;
}
