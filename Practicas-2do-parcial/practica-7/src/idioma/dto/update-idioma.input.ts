import { CreateIdiomaInput } from './create-idioma.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIdiomaInput extends PartialType(CreateIdiomaInput) {
  @Field(() => Int)
  id: number;
}
