import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePacienteInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  nombre: string;
  
  @IsNotEmpty()
  @IsString()
  @Field()
  identificacion: string;
}
