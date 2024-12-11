import { IsString } from 'class-validator';

export class CreateIdiomaDto {
  @IsString()
  descripcion!: string;
}
