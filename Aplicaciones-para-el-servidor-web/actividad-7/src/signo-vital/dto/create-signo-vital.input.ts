import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

@InputType()
export class CreateSignoVitalInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  descripcion: string;
  
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Field()
  nivelMinimo: number;
  
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Field()
  nivelMaximo: number;
}
