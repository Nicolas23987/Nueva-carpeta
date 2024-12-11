import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SignoVitalService } from './signo-vital.service';
import { SignoVital } from './entities/signo-vital.entity';
import { CreateSignoVitalInput } from './dto/create-signo-vital.input';
import { UpdateSignoVitalInput } from './dto/update-signo-vital.input';

@Resolver(() => SignoVital)
export class SignoVitalResolver {
  constructor(private readonly signoVitalService: SignoVitalService) {}

  @Mutation(() => SignoVital)
  createSignoVital(@Args('createSignoVitalInput') createSignoVitalInput: CreateSignoVitalInput) {
    return this.signoVitalService.create(createSignoVitalInput);
  }

  @Query(() => [SignoVital], { name: 'signoVital' })
  findAll() {
    return this.signoVitalService.findAll();
  }

  @Query(() => SignoVital, { name: 'signoVital' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.signoVitalService.findOne(id);
  }

  @Mutation(() => SignoVital)
  updateSignoVital(@Args('updateSignoVitalInput') updateSignoVitalInput: UpdateSignoVitalInput) {
    return this.signoVitalService.update(updateSignoVitalInput.id, updateSignoVitalInput);
  }

  @Mutation(() => SignoVital)
  removeSignoVital(@Args('id', { type: () => Int }) id: number) {
    return this.signoVitalService.remove(id);
  }
}
