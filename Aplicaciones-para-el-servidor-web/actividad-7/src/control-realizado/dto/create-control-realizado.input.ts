import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateControlRealizadoInput {
  @IsNotEmpty()
  @IsNumber()
  @Field()
  pacienteId: number;
  
  @IsNotEmpty()
  @IsNumber()
  @Field()
  signoVitalId: number;
  
  @IsNotEmpty()
  @IsDateString()
  @Field()
  fecha: string;
  
  @IsNotEmpty()
  @IsDateString()
  @Field()
  hora: string;
  
  @IsNotEmpty()
  @IsNumber()
  @Field()
  valor: number;
}
