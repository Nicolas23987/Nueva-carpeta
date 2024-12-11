import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActivoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  activoTecnologico: string;
}