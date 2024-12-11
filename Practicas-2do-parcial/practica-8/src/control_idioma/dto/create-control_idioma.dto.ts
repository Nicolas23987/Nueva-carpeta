import { IsNumber, Min, Max } from 'class-validator';

export class CreateControlIdiomaDto {
  @IsNumber()
  idEstudiante!: number;

  @IsNumber()
  idIdioma!: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  porcentajeLectura!: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  porcentajeEscritura!: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  porcentajeEscucharHablar!: number;
}
