import { IsNotEmpty, IsNumber, IsDate, IsString } from 'class-validator';

export class CreateControlDeActivoDto {
  @IsNotEmpty()
  @IsNumber()
  idActivo: number;

  @IsNotEmpty()
  @IsNumber()
  idDepartamento: number;

  @IsNotEmpty()
  @IsDate()
  fechaAsignacion: Date;

  @IsNotEmpty()
  @IsString()
  personaAsignada: string;

  @IsNotEmpty()
  @IsNumber()
  tiempoDepreciacion: number;
}
