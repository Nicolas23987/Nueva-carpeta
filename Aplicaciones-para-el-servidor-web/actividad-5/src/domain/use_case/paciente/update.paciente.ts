import { UpdatePacienteDto } from "../../dtos";
import { PacienteEntity } from "../../entities/paciente";
import { PacienteRepository } from "../../repositories/paciente.repository";



export interface UpdatePacienteUseCase {
    execute( dto: UpdatePacienteDto):Promise<PacienteEntity>
}

export class UpdatePaciente implements UpdatePacienteUseCase{
    constructor(
        public readonly repository: PacienteRepository
    ){}

    execute(dto: UpdatePacienteDto): Promise<PacienteEntity> {
        return this.repository.updateById( dto );
    }
}