import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ControlIdiomaService } from './control_idioma.service';
import { ControlIdioma } from './entities/control_idioma.entity';
import { CreateControlIdiomaInput } from './dto/create-control_idioma.input';
import { UpdateControlIdiomaInput } from './dto/update-control_idioma.input';

@Resolver(() => ControlIdioma)
export class ControlIdiomaResolver {
  constructor(private readonly controlIdiomaService: ControlIdiomaService) {}

  @Mutation(() => ControlIdioma)
  createControlIdioma(@Args('createControlIdiomaInput') createControlIdiomaInput: CreateControlIdiomaInput) {
    return this.controlIdiomaService.create(createControlIdiomaInput);
  }

  @Query(() => [ControlIdioma], { name: 'controlIdioma' })
  findAll() {
    return this.controlIdiomaService.findAll();
  }

  @Query(() => ControlIdioma, { name: 'controlIdioma' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.controlIdiomaService.findOne(id);
  }

  @Mutation(() => ControlIdioma)
  updateControlIdioma(@Args('updateControlIdiomaInput') updateControlIdiomaInput: UpdateControlIdiomaInput) {
    return this.controlIdiomaService.update(updateControlIdiomaInput.id, updateControlIdiomaInput);
  }

  @Mutation(() => ControlIdioma)
  removeControlIdioma(@Args('id', { type: () => Int }) id: number) {
    return this.controlIdiomaService.remove(id);
  }
}
