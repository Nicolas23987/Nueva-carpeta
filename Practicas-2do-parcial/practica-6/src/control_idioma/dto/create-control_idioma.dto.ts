import { IsInt, IsNotEmpty, IsPositive, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { Idioma } from 'src/idioma/entities/idioma.entity';

export class CreateControlIdiomaDto {
  @IsNotEmpty()
  @Type(() => Estudiante)
  estudiante!: Estudiante;

  @IsNotEmpty()
  @Type(() => Idioma)
  idioma!: Idioma;

  @IsInt()
  @IsPositive()
  @Min(0)
  @Max(100)
  porcentajeLectura!: number;

  @IsInt()
  @IsPositive()
  @Min(0)
  @Max(100)
  porcentajeEscritura!: number;

  @IsInt()
  @IsPositive()
  @Min(0)
  @Max(100)
  porcentajeEscucharHablar!: number;
}
