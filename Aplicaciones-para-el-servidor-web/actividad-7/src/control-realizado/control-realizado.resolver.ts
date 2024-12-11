import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ControlRealizadoService } from './control-realizado.service';
import { ControlRealizado } from './entities/control-realizado.entity';
import { CreateControlRealizadoInput } from './dto/create-control-realizado.input';
import { UpdateControlRealizadoInput } from './dto/update-control-realizado.input';

@Resolver(() => ControlRealizado)
export class ControlRealizadoResolver {
  constructor(private readonly controlRealizadoService: ControlRealizadoService) {}

  @Mutation(() => ControlRealizado)
  async createControlRealizado(@Args('createControlRealizadoInput') createControlRealizadoInput: CreateControlRealizadoInput) {
    return await this.controlRealizadoService.create(createControlRealizadoInput);
  }

  @Query(() => [ControlRealizado], { name: 'controlesRealizados' })
  findAll() {
    return this.controlRealizadoService.findAll();
  }

  @Query(() => ControlRealizado, { name: 'controlRealizado' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.controlRealizadoService.findOne(id);
  }

  @Mutation(() => ControlRealizado)
  updateControlRealizado(@Args('updateControlRealizadoInput') updateControlRealizadoInput: UpdateControlRealizadoInput) {
    return this.controlRealizadoService.update(updateControlRealizadoInput.id, updateControlRealizadoInput);
  }

  @Mutation(() => ControlRealizado)
  removeControlRealizado(@Args('id', { type: () => Int }) id: number) {
    return this.controlRealizadoService.remove(id);
  }
}
