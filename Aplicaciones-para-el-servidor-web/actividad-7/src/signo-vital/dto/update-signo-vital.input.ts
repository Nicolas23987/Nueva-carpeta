import { CreateSignoVitalInput } from './create-signo-vital.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSignoVitalInput extends PartialType(CreateSignoVitalInput) {
  @Field(() => Int)
  id: number;
}
