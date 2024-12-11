import { CreateControlIdiomaInput } from './create-control_idioma.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateControlIdiomaInput extends PartialType(CreateControlIdiomaInput) {
  @Field(() => Int)
  id: number;
}
