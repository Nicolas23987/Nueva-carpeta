import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IdiomaService } from './idioma.service';
import { Idioma } from './entities/idioma.entity';
import { CreateIdiomaInput } from './dto/create-idioma.input';
import { UpdateIdiomaInput } from './dto/update-idioma.input';

@Resolver(() => Idioma)
export class IdiomaResolver {
  constructor(private readonly idiomaService: IdiomaService) {}

  @Mutation(() => Idioma)
  createIdioma(@Args('createIdiomaInput') createIdiomaInput: CreateIdiomaInput) {
    return this.idiomaService.create(createIdiomaInput);
  }

  @Query(() => [Idioma], { name: 'idioma' })
  findAll() {
    return this.idiomaService.findAll();
  }

  @Query(() => Idioma, { name: 'idioma' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.idiomaService.findOne(id);
  }

  @Mutation(() => Idioma)
  updateIdioma(@Args('updateIdiomaInput') updateIdiomaInput: UpdateIdiomaInput) {
    return this.idiomaService.update(updateIdiomaInput.id, updateIdiomaInput);
  }

  @Mutation(() => Idioma)
  removeIdioma(@Args('id', { type: () => Int }) id: number) {
    return this.idiomaService.remove(id);
  }
}
