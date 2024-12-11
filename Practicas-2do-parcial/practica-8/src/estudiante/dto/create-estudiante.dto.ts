import { IsString } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  nombre!: string;

  @IsString()
  identificacion!: string;
}
