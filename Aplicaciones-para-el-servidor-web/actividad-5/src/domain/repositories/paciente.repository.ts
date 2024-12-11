
import { CreatePacienteDto, UpdatePacienteDto } from '../dtos/index'
import { PacienteEntity } from '../entities/paciente'


export abstract class  PacienteRepository {

    abstract create( createPaciente: CreatePacienteDto): Promise<PacienteEntity>;
    abstract getAll(): Promise<PacienteEntity[]>;
    abstract findById(id: number): Promise<PacienteEntity>;
    abstract updateById( updatePaciente: UpdatePacienteDto ): Promise<PacienteEntity>
    abstract deleteById(id: number): Promise<PacienteEntity>;

}