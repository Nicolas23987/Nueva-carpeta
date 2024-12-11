import { IsString, IsNumber } from 'class-validator';

export class CreateCocineroDto {
  @IsString()
  nombre: string;

  @IsNumber()
  sueldo_basico: number;
}
