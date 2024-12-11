import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActivoDto {
  @IsNotEmpty()
  @IsString()
  activoTecnologico: string;
}
