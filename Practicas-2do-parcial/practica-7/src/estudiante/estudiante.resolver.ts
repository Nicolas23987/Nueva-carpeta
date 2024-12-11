import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EstudianteService } from './estudiante.service';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteInput } from './dto/create-estudiante.input';
import { UpdateEstudianteInput } from './dto/update-estudiante.input';

@Resolver(() => Estudiante)
export class EstudianteResolver {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Mutation(() => Estudiante)
  createEstudiante(@Args('createEstudianteInput') createEstudianteInput: CreateEstudianteInput) {
    return this.estudianteService.create(createEstudianteInput);
  }

  @Query(() => [Estudiante], { name: 'estudiante' })
  findAll() {
    return this.estudianteService.findAll();
  }

  @Query(() => Estudiante, { name: 'estudiante' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.estudianteService.findOne(id);
  }

  @Mutation(() => Estudiante)
  updateEstudiante(@Args('updateEstudianteInput') updateEstudianteInput: UpdateEstudianteInput) {
    return this.estudianteService.update(updateEstudianteInput.id, updateEstudianteInput);
  }

  @Mutation(() => Estudiante)
  removeEstudiante(@Args('id', { type: () => Int }) id: number) {
    return this.estudianteService.remove(id);
  }
}
