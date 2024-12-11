import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class CreateControlIdiomaInput {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  estudianteId!: number;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  idiomaId!: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  porcentajeLectura!: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  porcentajeEscritura!: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  porcentajeEscucharHablar!: number;
}
