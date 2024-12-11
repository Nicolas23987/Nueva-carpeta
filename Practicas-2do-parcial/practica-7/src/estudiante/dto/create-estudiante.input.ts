import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class CreateEstudianteInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  identificacion!: string;
}