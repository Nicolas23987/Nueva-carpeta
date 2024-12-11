import { CreateEstudianteInput } from './create-estudiante.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEstudianteInput extends PartialType(CreateEstudianteInput) {
  @Field(() => Int)
  id: number;
}
