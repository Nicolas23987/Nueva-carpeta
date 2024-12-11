import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateControlRealizadoDto {
  @IsNotEmpty()
  @IsNumber()
  pacienteId: number;

  @IsNotEmpty()
  @IsNumber()
  signoVitalId: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;

  @IsNotEmpty()
  @IsDateString()
  hora: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}