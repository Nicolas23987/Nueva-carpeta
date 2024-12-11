import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class CreateIdiomaInput {


  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion!: string;
}