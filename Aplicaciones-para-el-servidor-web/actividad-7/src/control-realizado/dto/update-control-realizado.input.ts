import { CreateControlRealizadoInput } from './create-control-realizado.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateControlRealizadoInput extends PartialType(CreateControlRealizadoInput) {
  @Field(() => Int)
  id: number;
}
